package main

type config struct {
	Port         string
	StaticFolder string
	IndexFile    string
}

func newConfig() config {

	conf := config{}
	conf.Port = ":80"
	conf.StaticFolder = "./static"
	conf.IndexFile = "./static/index.html"

	return conf
}
