<template>
  <el-container id="admin">
    <el-aside width="200px" id="admin-aside">
      <el-menu :default-openeds="['1']" default-active="1-1">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>导航
          </template>

          <el-menu-item-group>
            <template slot="title">订单处理</template>
            <el-menu-item index="1-1">未处理</el-menu-item>
            <el-menu-item index="1-2">已处理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="admin-header">
          <h3 class="amin-title">订单管理页面</h3>
      </el-header>
      <el-main class="admin-main"></el-main>
    </el-container>
  </el-container>
</template>
