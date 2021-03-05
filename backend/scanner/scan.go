package main

import (
	"fmt"
	"log"
	"net"
	"net/http"
	"time"

	"github.com/go-ping/ping"
)

// Hosts creates hosts list from ip mask
func Hosts(cidr string) ([]string, error) {
	ip, ipnet, err := net.ParseCIDR(cidr)
	if err != nil {
		return nil, err
	}

	var ips []string
	for ip := ip.Mask(ipnet.Mask); ipnet.Contains(ip); inc(ip) {
		ips = append(ips, ip.String())
	}

	// remove network address and broadcast address
	lenIPs := len(ips)
	switch {
	case lenIPs < 2:
		return ips, nil

	default:
		return ips[1 : len(ips)-1], nil
	}
}

func inc(ip net.IP) {
	for j := len(ip) - 1; j >= 0; j-- {
		ip[j]++
		if ip[j] > 0 {
			break
		}
	}
}

// CamScanner is responcible for host reach and detection
type CamScanner struct {
	dialTimeout int
	paths       []string
}

// Ping check if host is reachable
func (scanner *CamScanner) Ping(host string) bool {
	pinger, err := ping.NewPinger(host)
	if err != nil {
		log.Printf("ERROR: could not create pinger on host %s: %+v\n", host, err)
		return false
	}

	// TODO: do something with priveleged mode
	pinger.SetPrivileged(true)

	pinger.Count = 3
	pinger.Timeout = time.Duration(scanner.dialTimeout) * time.Millisecond
	err = pinger.Run()
	if err != nil {
		log.Printf("ERROR pinging %s: %+v\n", host, err)
	}
	return pinger.Statistics().PacketLoss != 100
}

// Scan checks for concrete paths on host
func (scanner *CamScanner) Scan(host string) []string {
	// TODO: change scan algorithm for RTSP testing on real camera
	res := make([]string, 0)
	client := http.Client{
		Timeout: time.Duration(scanner.dialTimeout) * time.Millisecond,
	}
	for _, path := range scanner.paths {
		_, err := client.Get(fmt.Sprintf("http://%s/%s", host, path))
		if err == nil {
			res = append(res, path)
		}
	}
	return res
}
