package main

import (
	"github.com/gin-gonic/gin"
)

func main() {

	app := gin.Default()
	app.GET("api/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	app.Run(":3000")
}
