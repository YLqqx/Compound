import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/framework/mobile/home/index.vue'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

/**
 * 验证
 */
router.beforeEach((to, from, next) => {
  if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = '/p_index.html#/'
    return
  }
  next()
})

export default router
