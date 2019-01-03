<template>
  <div id="login">
    <header class="login-header"></header>
    <article class="login-content">
      <section>
        <h3 class="login-title">登录后台管理系统</h3>
        <el-form :model="ruleForm" status-icon label-width="100px" class="ruleForm">
          <el-form-item label="用户名">
            <el-input v-model="ruleForm.UserName" placeholder="请输入用户名">
              <i class="el-icon-share el-input__icon" slot="suffix"></i>
            </el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="ruleForm.PassWord" placeholder="请输入密码">
              <i class="el-icon-edit el-input__icon" slot="suffix"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm()" :loading="loading">提交</el-button>
            <el-button @click="resetForm()">重置</el-button>
          </el-form-item>
        </el-form>
      </section>
    </article>
  </div>
</template>


<script>
export default {
  data() {
    return {
      ruleForm: {
        UserName: "",
        PassWord: ""
      },
      loading: false
    };
  },
  methods: {
    submitForm() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        if (
          this.ruleForm.UserName == "admin" &&
          this.ruleForm.PassWord == "admin123"
        ) {
          this.$notify({
            title: "成功",
            message: "登录成功",
            type: "success"
          });
          this.$store.commit("onAdmin");

          this.$router.push("/admin");
        } else {
          this.$notify.error({
            title: "错误",
            message: "密码或账户错误"
          });
        }
      }, 300);
    },
    resetForm() {
      this.ruleForm.UserName = "";
      this.ruleForm.PassWord = "";
    }
  }
};
</script>