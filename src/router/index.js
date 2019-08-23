import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routesTest = [
  {
    path: '/', // 首页
    name: 'home',
    components: {
      default: () => import('@/views/home'),
      'hhctest': () => import('@/views/download/Download')// 组件复用
    },
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
        /* beforeEnter: (to, from, next) => { // 路由独享的守卫
          alert('请登录')
          next(false)
        } */
      }
    ],
    redirect: 'download/index' // 二级路由默认访问地址
  }
]

const router = new Router({
  routes: routesTest
  // mode: "history"//去掉#号
})

// 全局守卫-
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
  /* var oHhc = false
  if (oHhc) {
    next()
  } else {
    if (to.name === 'mend' || to.name === 'faq') {
      next()
    } else {
      console.log('ddd')
      next('/download/mend')
    }
  } */
})

// 全局后置钩子
/* router.afterEach((to, form) => {
  alert('ddd')
}) */

export function downLoad1 () {
  return routesTest
}
export default router
