import Vue from 'vue'
import App from './App.vue'
import router from './router/'// 引入路由
import './style/style.css'
import '@/api/lwApi'
import CommonTop from '@/components/commonTop'
import Top from '@/components/top'
import Left from '@/components/left'
import Focus from '@/components/focus'
import copy from '@/components/copy'
Vue.config.productionTip = false
Vue.component({
  'copy': copy,
  appTop: Top,
  appLeft: Left,
  appFocus: Focus,
  'commonTop': CommonTop
})

/* Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
}) */

/* eslint-disable no-new */
new Vue({
  el: '#App',
  router,
  render: h => h(App)
})
