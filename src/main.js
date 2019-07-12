import Vue from 'vue'
import App from './App.vue'
new Vue({
    el: '#App',
   /* template:'<App/>',
    component:{App},*/
   render: h => h(App),
    data:{
        message: 'Hello Vue.js!'
    }
});
console.log('test');