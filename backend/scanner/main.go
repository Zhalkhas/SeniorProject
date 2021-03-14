package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strings"
	"time"

	"gopkg.in/yaml.v2"
)

// Env is DI for http requests handler
type Env struct {
	db DB
}

// Config stores information about scanner and database configuration
type Config struct {
	Scanner struct {
		Workers      int    `yaml:"workers"`
		ScanPeriod   int    `yaml:"scan_period"`
		Subnet       string `yaml:"scan_subnet"`
		DialTimeout  int    `yaml:"dial_timeout"`
		PathListFile string `yaml:"pathlist_file"`
	}
	Server struct {
		Port string `yaml:"port"`
	}
	DB struct {
		DBPath string `yaml:"path_to_db"`
	}
}

// NewConfig returns a new decoded Config struct
func NewConfig(configPath string) (*Config, error) {
	// Create config structure
	config := &Config{}

	// Open config file
	file, err := os.Open(configPath)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	// Init new YAML decode
	d := yaml.NewDecoder(file)

	// Start YAML decoding from file
	if err := d.Decode(&config); err != nil {
		return nil, err
	}

	return config, nil
}

func (c *Env) cameraListHandler(rw http.ResponseWriter, r *http.Request) {
	cameras, err := c.db.GetAll()
	if err != nil {
		log.Printf("ERROR getting values from DB: %+v\n", err)
		rw.WriteHeader(http.StatusInternalServerError)
	}
	b, err := json.Marshal(cameras)
	if err != nil {
		log.Printf("ERROR marshalling json: %+v\n", err)
		rw.WriteHeader(http.StatusInternalServerError)
	}

	_, err = rw.Write(b)

	if err != nil {
		log.Printf("ERROR writing responce: %+v\n", err)
		rw.WriteHeader(http.StatusInternalServerError)
	}
}

func main() {
	if len(os.Args) != 2 {
		log.Fatalf("Usage: %s configPath\n", os.Args[0])
	}

	cfg, err := NewConfig(os.Args[1])
	if err != nil {
		log.Panicf("ERROR: could not parse config file %+v\n", err)
	}

	db := &SQLiteDB{}

	env := &Env{}
	env.db = db
	env.db.Init(cfg.DB.DBPath)

	go func() {
		http.HandleFunc("/cameras", env.cameraListHandler)

		if err := http.ListenAndServe(":"+cfg.Server.Port, nil); err != nil {
			log.Panicf("ERROR during server handle %+v\n", err)
		}
	}()

	lst, err := ioutil.ReadFile(cfg.Scanner.PathListFile)

	if err != nil {
		log.Fatalln(err)
	}

	pathsList := strings.Split(string(lst), "\n")

	scanner := &CamScanner{dialTimeout: cfg.Scanner.DialTimeout, paths: pathsList}

	hosts, err := Hosts(cfg.Scanner.Subnet)

	if err != nil {
		log.Fatalf("Error getting hosts list from subnet mask %+v\n", err)
	}

	hostsChan := make(chan string)
	defer close(hostsChan)

	for i := 0; i < cfg.Scanner.Workers; i++ {
		go func() {
			for host := range hostsChan {
				if scanner.Ping(host) {
					log.Printf("Found camera on ip %s\n", host)

					foundPaths := scanner.Scan(host)
					if len(foundPaths) > 0 {
						log.Printf("Found %+v on %s\n", foundPaths, host)
					}
					// if len(foundPaths) < 6 {
					for _, path := range foundPaths {
						ipCam := IPCam{
							StreamURL: fmt.Sprintf("%s/%s", host, path),
						}
						err = db.Put(ipCam)
						if err != nil {
							log.Printf("ERROR during camera add, camera:%+v, error:%+v\n", ipCam, err)
						}
					}
					// }
				} else {
					// log.Printf("Host %s is not alive\n", host)
				}
			}
		}()
	}

	for {
		log.Println("Initiating scan")
		for _, host := range hosts {
			hostsChan <- host
		}
		time.Sleep(time.Duration(cfg.Scanner.ScanPeriod) * time.Minute)
	}
}
