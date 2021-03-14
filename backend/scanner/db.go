package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

// IPCam stores info about found camera
type IPCam struct {
	StreamURL string `field:"stream_url" json:"streamURL"`
}

// DB is interface that handles work with storage
// of scanned ip cameras
type DB interface {
	Init(dbPath string) error
	Put(camera IPCam) error
	GetAll() ([]IPCam, error)
}

// SQLiteDB handles work with SQLite
type SQLiteDB struct {
	dbConn *sql.DB
}

// Init instantiates connection to SQLite
func (db *SQLiteDB) Init(dbPath string) error {
	//TODO: check if database does not exist
	dbConn, err := sql.Open("sqlite3", dbPath)
	db.dbConn = dbConn
	return err
}

// Put creates camera entry in SQLite
func (db *SQLiteDB) Put(camera IPCam) error {
	_, err := db.dbConn.Exec("INSERT INTO cameras (stream_url) VALUES ($1)", camera.StreamURL)
	return err
}

// GetAll returns all available cameras from SQLite
func (db *SQLiteDB) GetAll() ([]IPCam, error) {
	rows, err := db.dbConn.Query("SELECT stream_url FROM cameras")
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	cameras:= make([]IPCam, 0)
	for rows.Next() {
		var camera IPCam
		err = rows.Scan(&camera.StreamURL)
		if err != nil {
			return nil, err
		}
		cameras = append(cameras, camera)
	}
	err = rows.Err()
	return cameras, err
}
