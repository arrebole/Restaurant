import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    "admin": true,
  },
  mutations: {
    onAdmin (state) {
      state.admin = true;
    }
  },
  actions: {

  }
})
