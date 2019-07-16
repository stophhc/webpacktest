import Vue from 'vue'
import App from './App.vue'
import router from './router/'//引入路由
import  './style/style.css'
Vue.config.productionTip = false
new Vue({
    el: '#App',
    router,
   render: h => h(App),
});