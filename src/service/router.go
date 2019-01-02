package main

import (
	"net/http"
	"strings"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

// 通过url判断路由是否被前端路由处理，如果是则返回根目录
func noRoute(ctx *gin.Context) {
	path := strings.Split(ctx.Request.URL.Path, "/")
	if (path[1] != "") && (path[1] == "api") {
		ctx.JSON(http.StatusNotFound, gin.H{"msg": "no route", "body": nil})
	} else {
		ctx.HTML(http.StatusOK, "index.html", "")
	}
}

func newRouter(localConfig *config) *gin.Engine {

	router := gin.Default()
	// 默认中间件
	router.Use(gin.Logger())
	router.Use(gin.Recovery())

	// 前端路由处理
	router.NoRoute(noRoute)

	// 静态文件处理
	router.Use(static.Serve("/", static.LocalFile((*localConfig).StaticFolder, true)))
	router.LoadHTMLGlob(localConfig.IndexFile)

	return router
}
