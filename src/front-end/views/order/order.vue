<template>
  <div id="order">
    <header class="order-header">
      <el-row type="flex" justify="space-between">
        <el-col :span="2" class="txt-concent">价格：{{ subData.TotalPrice }}</el-col>
        <el-col :span="2">
          <el-button type="primary" @click="submit()" :loading="loading">提交</el-button>
        </el-col>
      </el-row>
    </header>
    <article>
      <section class="order-table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="id" label="id" width="180"></el-table-column>
          <el-table-column prop="name" label="名称" width="180"></el-table-column>
          <el-table-column prop="price" label="价格"></el-table-column>
          <el-table-column prop="count" label="数量"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleAdd(scope.row)">添加</el-button>
              <el-button size="mini" type="danger" @click="handleDecrease(scope.row)">减少</el-button>
            </template>
          </el-table-column>
        </el-table>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      subData: {
        TotalPrice: 0,
        items: []
      },
      tableData: [
        {
          id: 2,
          name: "某菜",
          price: 9,
          count: 0
        },
        {
          id: 3,
          name: "某菜",
          price: 9,
          count: 0
        },
        {
          id: 4,
          name: "某菜",
          price: 7,
          count: 0
        },
        {
          id: 5,
          name: "某菜",
          price: 5,
          count: 0
        }
      ]
    };
  },
  methods: {
    handleAdd(row) {
      row.count++;
      this.subData.TotalPrice += row.price;
    },
    handleDecrease(row) {
      if (row.count > 0) {
        row.count--;
        this.subData.TotalPrice -= row.price;
      }
    },
    submit() {
      this.loading = true;

      this.tableData.forEach(element => {
        if (element.count != 0) {
          this.subData.items.push(element);
        }
      });
      setTimeout(() => {
        // 清理
        this.subData.items = [];
        this.subData.TotalPrice = 0;
        this.tableData.forEach(element => {
          element.count = 0;
        });

        this.$message({
          message: "提交成功",
          type: "success"
        });

        this.loading = false;
      }, 500);
    }
  }
};
</script>
