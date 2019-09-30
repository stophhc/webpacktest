<template>
<div>
  <div class="VueList">
    <h2>Vue.compile</h2>
    <p>渲染函数</p>
    <div></div>
  </div>

  <div class="VueList">
    <h2>Vue.mixin</h2>
    <p>全局混入</p>
    <div></div>
  </div>

  <div class="VueList">
    <h2>Vue.filter</h2>
    <p>过滤器</p>
    <div>{{'2019'|filterA|filterB|filterC}}</div>
  </div>

  <div class="VueList">
    <h2>Vue.directive</h2>
    <p>自定义指令</p>
    <div v-hello="color3">{{message}}</div>
  </div>

  <div class="VueList">
    <h2>Vue.nextTick</h2>
    <p>实时更新</p>
    <div ref="nextTickDiv">{{oNextTick.oNextTick1}}</div>
    <div>{{oNextTick.oNextTick2}}</div>
    <div>{{oNextTick.oNextTick3}}</div>
    <button @click="changeNextTick">改变</button>
  </div>

  <div class="VueList">
    <h2>extend</h2>
    <div id="mount-point">d</div>
  </div>

  <div class="VueList">
    <h2>set、delete</h2>
    姓名：{{ items.nameId }}<br>
    年龄：{{items.age}}<br>
    说明：{{items.info}}<br>
    <button @click="changeSet">点击改变</button>
  </div>

</div>
</template>

<script>
// extend
import Vue from 'vue'
var Profile = Vue.extend({
  template: '<p>{{firstName}}</p>',
  data: function () {
    return {
      firstName: 'Walter'
    }
  }
})

// 自定义指令
Vue.directive('hello', {
  bind: function (el, binding, vnode) {
    el.innerHTML = 'name:' + binding.name + '<br>' +
      'value:' + binding.value + '<br>' +
      'value:' + binding.expression + '<br>'
  },
  unbind: function (el, binding, vnode) {
    console.log('dd')
  }
})
export default {
  name: 'WholeAPI',
  data () {
    return {
      items: {
        nameId: '标题',
        age: '3',
        info: 'my name is test'
      },
      oNextTick: {
        oNextTick1: '11',
        oNextTick2: '22',
        oNextTick3: '33'
      },
      message: 10,
      color3: 'red'
    }
  },
  filters: {// 过滤器
    filterA: function (value) {
      return value + '年'
    },
    filterB: function (value) {
      return value + '46464646'
    },
    filterC: function (value) {
      return value + '1'
    }
  },
  methods: {
    changeSet () {
      // Vue.set( target, key, value ) target(改变数据的来源)，key(要更改的具体数据)，value(重新赋的值)
      this.$set(this.items, 'age', '22')

      // vue.$delete(数据的来源,删除的数据)
      this.$delete(this.items, 'info')
    },
    changeNextTick () {
      this.oNextTick.oNextTick1 = 'Hello world'
      this.oNextTick.oNextTick2 = this.$refs.nextTickDiv.innerHTML
      this.$nextTick(() => {
        this.oNextTick.oNextTick3 = this.$refs.nextTickDiv.innerHTML
      })
    }
  },
  mounted () {
    // 创建 Profile 实例，并挂载到一个元素上。
    new Profile().$mount('#mount-point')
  }
}
</script>

<style scoped>
  .VueList{width: 1000px;margin: 100px auto;}
  h2{margin-bottom: 10px;font-size: 20px;}
  p{font-size: 14px;padding-bottom: 10px;}
</style>
