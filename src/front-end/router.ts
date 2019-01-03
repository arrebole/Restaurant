import Vue from 'vue'
import Router from 'vue-router'

import admin from './views/admin/admin.vue'
import login from './views/admin/login.vue'
import order from './views/order/order.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',

  base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'index',
      component: order,

    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
    },
    {
      path: '/admin/login',
      name: 'login',
      component: login,
    },
    {
      path: '*',
      redirect: '/'
    }
    //,
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
