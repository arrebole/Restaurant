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
            <el-menu-item index="1-1" @click="changeShow(list.undone)">未处理</el-menu-item>
            <el-menu-item index="1-2" @click="changeShow(list.completed)">已处理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="admin-header">
        <h3 class="amin-title">订单管理页面</h3>
      </el-header>

      <el-main class="admin-main">
        <el-table :data="this[show]" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline>
                <el-form-item label="详细:">
                  <h4 v-for="(item,index) in props.row.items" :key="index">
                    <span :key="'a' + index" class="admin-item-detail">{{ item.name }}</span>
                    <span :key="'b' + index" class="admin-item-detail">x{{ item.count }}</span>
                    <span :key="'c' + index" class="admin-item-detail">总价: {{ item.price }}</span>
                  </h4>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="单次" prop="id"></el-table-column>
          <el-table-column label="时间" prop="time"></el-table-column>
          <el-table-column label="金额" prop="money"></el-table-column>
          <el-table-column label="处理">
            <template slot-scope="scope">
              <el-button size="mini" :type="buttonType" @click="handle(scope.row)">处理</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      show: "undone",
      list: {
        completed: "completed",
        undone: "undone"
      },
      undone: [
        {
          id: 1,
          time: "2018-8-8",
          money: 100,
          items: [
            {
              name: "某菜",
              price: 9,
              count: 1
            }
          ]
        }
      ],
      completed: []
    };
  },
  computed:{
    buttonType(){
      if(this.show != "completed"){
        return "danger";
      }
      return "success";
    }
  },
  methods: {
    changeShow(name) {
      this.show = name;
    },
    handle(row) {
      if(this.show == "completed"){
        return;
      }
      let newArray = [];
      this.undone.forEach(element => {
        if (element.id !== row.id) {
          newArray.push(element);
        }
      });
      this.undone = newArray;
      this.completed.push(row);
    }
  }
};
</script>
