package main

import (
	"fmt"
	"net/http"

	"./route"
)

func main() {
	// mux是多路复用处理器 类似总闸
	mux := http.NewServeMux()

	// file是 文件处理器 静态文件处理
	file := http.FileServer(http.Dir("./public"))

	// mux 绑定处理器函数或者处理器
	// handle 是处理器 结构体类型
	// handleFunc 是处理器函数 函数类型
	mux.Handle("/static/", file)
	mux.HandleFunc("/", route.Index)

	/*----------------------------------------------------------*/

	// 配置文件
	service := &http.Server{
		Addr:    "127.0.0.1:8080",
		Handler: mux,
	}

	// 启动监听
	fmt.Println("service runing http://127.0.0.1:8080")
	service.ListenAndServe()
}
