FROM golang:1.15

RUN apt update && apt upgrade -y
RUN apt install -y sqlite3

WORKDIR /srv

RUN sqlite3 --cmd "CREATE TABLE cameras(stream_url TEXT UNIQUE PRIMARY KEY);" cameras.db

COPY go.mod ./
COPY go.sum ./

RUN go get -v ./...

COPY config.yaml ./
COPY pathlist.txt ./

COPY *.go ./

RUN go build -o scanner 

ENTRYPOINT ["/srv/scanner", "/srv/config.yaml"]
