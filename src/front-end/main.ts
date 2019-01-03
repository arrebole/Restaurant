import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/display.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "./style/layout.scss";



Vue.config.productionTip = false

Vue.use(ElementUI);

// 全局路由守卫
router.beforeEach((to, from, next) => {

  if (to.path == "/admin" && !store.state.admin) {
    next("/admin/login");

  }
  if (to.path == "/admin/login" && store.state.admin) {
    next("/admin");

  }
  next();
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
