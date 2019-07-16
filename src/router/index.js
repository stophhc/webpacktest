import Vue from 'vue'
import Router from 'vue-router'
import test from '@/components/test'
import test1 from '@/components/test1'

import Home from '@/views/home'
Vue.use(Router);

export default new Router({
    routes:[
        {
            path : '*',//地址栏路径
            redirect:'/'
        },
        {
            path : '/',//首页
            name :'home' ,
            component :  Home//组件的名字
        },
        {
            path : '/test1',//地址栏路径
            name :'test1' ,
            component :  test1//组件的名字，这个路由对应跳转到的组件
        }
    ],
    mode: "history"//去掉#号
})


