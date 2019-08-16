import Vue from 'vue'
import App from './App.vue'
import router from './router/'// 引入路由
import './style/style.css'
Vue.config.productionTip = false

// 导航守卫---改变title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#App',
  router,
  render: h => h(App)
})
