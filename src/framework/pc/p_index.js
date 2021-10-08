// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '../../router/pc/index'
import store from '../../store/index'
// 全局引入按需引入UI库 vant
import '../../plugins/vant'

// 初始化web3
// import {initWeb3} from '../../api/web3'
// Vue.prototype.web3 = initWeb3()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
