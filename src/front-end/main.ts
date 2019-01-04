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

  if (to.name == "admin" && !store.state.admin) {
    next({ name: "login" });

  }
  if (to.name == "login" && store.state.admin) {
    next({ name: "admin" });

  }
  next();
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
