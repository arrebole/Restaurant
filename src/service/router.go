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
		ctx.HTML(http.StatusOK, "index.html", nil)
	}
}

func newRouter(localConfig *config) *gin.Engine {

	// 设置编译环境为发布模式
	// gin.SetMode(gin.ReleaseMode)

	// 默认中间键
	router := gin.Default()

	// 前端路由处理
	router.NoRoute(noRoute)

	// 静态文件处理
	router.Use(static.Serve("/", static.LocalFile((*localConfig).StaticFolder, true)))

	return router
}
