import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/', // 首页
      name: 'home',
      component: () => import('@/views/home')
    },
    {
      path: '/download', // 地址栏路径
      name: 'download',
      component: () => import('@/views/download/index'),
      children: [// 子路由
        {
          path: 'index',
          component: () => import('@/views/download/index')
        },
        {
          path: 'mend',
          name: 'mend',
          component: () => import('@/views/download/mend')
        }
      ]

    }
  ]
  // mode: "history"//去掉#号
})
