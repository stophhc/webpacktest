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
  },
  {
    path: '/new', // 地址栏路径
    name: 'new',
    component: () => import('@/views/new/index'),
    children: [// 子路由
      {
        path: 'synthesize',
        name: 'synthesize',
        component: () => import('@/views/new/Synthesize'),
        meta: {title: '综合'}
      },
      {
        path: 'notice',
        name: 'notice',
        component: () => import('@/views/new/Notice'),
        meta: {title: '公告'}
      },
      {
        path: 'activity',
        name: 'activity',
        component: () => import('@/views/new/Activity'),
        meta: {title: '活动'}
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('@/views/new/News'),
        meta: {title: '新闻'}
      },
      {
        path: 'maintain',
        name: 'maintain',
        component: () => import('@/views/new/Maintain'),
        meta: {title: '维护'}
      },
      {
        path: 'hotspot',
        name: 'hotspot',
        component: () => import('@/views/new/Hotspot'),
        meta: {title: '热点'}
      }
    ],
    redirect: 'new/synthesize' // 二级路由默认访问地址
  },
  {
    path: '/hhc', // 地址栏路径
    name: 'hhc',
    component: () => import('@/views/hhc/test1'),
    children: [// 子路由
      {
        path: 'test1',
        name: 'test1',
        component: () => import('@/views/hhc/test1'),
        meta: {title: '测试1'}
      },
      {
        path: 'test1',
        name: 'test1',
        component: () => import('@/views/hhc/test2'),
        meta: {title: '测试2'}
      }
    ],
    redirect: 'hhc/test1' // 二级路由默认访问地址
  },
  {
    path: '/wholeAPI', // 地址栏路径
    name: 'wholeAPI',
    component: () => import('@/views/VueParameter/wholeAPI')
  },
  {
    path: '/componentsValue',
    name: 'componentsValue',
    component: () => import('@/views/componentsValue/Index'),
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
