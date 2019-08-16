import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/', // 首页
      name: 'home',
      component: () => import('@/views/home'),
      meta: {title: '首页'}
    },
    {
      path: '/download', // 地址栏路径
      name: 'download',
      component: () => import('@/views/download/index'),
      children: [// 子路由
        {
          path: 'index',
          name: 'index',
          component: () => import('@/views/download/Download'),
          meta: {title: '客户端下载'}
        },
        {
          path: 'mend',
          name: 'mend',
          component: () => import('@/views/download/mend'),
          meta: {title: '补丁下载'}
        },
        {
          path: 'faq',
          name: 'faq',
          component: () => import('@/views/download/Faq'),
          meta: {title: '常见问题'}
        }
      ],
      redirect: 'download/index' // 二级路由默认访问地址
    }
  ]
  // mode: "history"//去掉#号
})

export default router
