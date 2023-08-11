package main

import "fmt"

func main() {
	fmt.Println ("hello world" ,1222)
}

// to run

/*
go run filename.go
*/


// or alternatively build the folder or file
/*
go build filename .go or folder name
*/


// or by intalling 

/*
go install filename.go or folder
*/

// create a different binary for a different architecture

/*
GOOS=windows GOARCH=amd64 go build hello.go
This will create a hello.exe executable for 64-bit Windows machines
Setup for 64-bit macOS (Intel or Apple Silicon) is GOOS=darwin GOARCH=amd64
and Linux is GOOS=linux GOARCH=amd64
*/