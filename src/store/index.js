import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app
  },
  getters
})

// 设置localStroage值
// localStorage.setItem('username','zhangsan')
// 获取localStroage值
// localStorage.getItem('username');

export default store
