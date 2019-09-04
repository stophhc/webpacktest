<template>
<div>
  <div class="VueList">
    <h2>nextTick</h2>
    <div ref="nextTickDiv">{{oNextTick.oNextTick1}}</div>
    <div>{{oNextTick.oNextTick2}}</div>
    <button @click="changeNextTick">改变</button>
  </div>

  <div class="VueList">
    <h2>extend</h2>
    <div id="mount-point">d</div>
  </div>

  <div class="VueList">
    <h2>set</h2>
    姓名：{{ items.nameId }}<br>
    年龄：{{items.age}}<br>
    说明：{{items.info}}<br>
    <button @click="changeSet">点击改变</button>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
var Profile = Vue.extend({
  template: '<p>{{firstName}}</p>',
  data: function () {
    return {
      firstName: 'Walter'
    }
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
      }
    }
  },
  methods: {
    changeSet () {
      // Vue.set( target, key, value ) target(改变数据的来源)，key(要更改的具体数据)，value(重新赋的值)
      this.$set(this.items, 'age', '22')
    },
    changeNextTick () {
      this.oNextTick.oNextTick2 = this.$refs.nextTickDiv.innerHTML
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
  h2{margin-bottom: 20px;font-size: 20px;}
</style>
