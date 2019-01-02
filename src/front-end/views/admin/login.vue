<template>
  <div id="login">
    <div class="login-form">
      <el-row type="flex" justify="center">
        <el-col :span="6" class="login-input-space">
          <el-input v-model="user" placeholder="用户账号">
            <i class="el-icon-star-off el-input__icon" slot="suffix"></i>
          </el-input>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="6" class="login-input-space">
          <el-input type="password" v-model="passwd" placeholder="请输入密码">
            <i class="el-icon-edit el-input__icon" slot="suffix"></i>
          </el-input>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="login-input-end">
        <el-col :span="2">
          <el-button type="success" round @click="tryLogin">成功按钮</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      user: "",
      passwd: ""
    };
  },
  methods: {
    tryLogin() {
      if(this.user=='admin'&& this.passwd=="admin"){
        this.$router.push("/");
      }
    }
  }
};
</script>