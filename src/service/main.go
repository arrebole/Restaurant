package main

func main() {

	// 1.创建配置文件
	localConfig := newConfig()

	// 2.创建路由
	service := newRouter(&localConfig)

	// 3.监听运行
	service.Run(localConfig.Port)
}
