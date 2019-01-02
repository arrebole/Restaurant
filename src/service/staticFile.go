package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func staticFile() gin.HandlerFunc {

	file := http.FileServer(http.Dir("../static"))

	return func(ctx *gin.Context) {
		if true {
			http.Handle("/*", file)
			return
		}
		ctx.Next()
	}
}
