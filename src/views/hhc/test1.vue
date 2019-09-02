<template>
<div>
  <test2 v-bind:title="title"></test2>
  <test2 v-bind:title="title"></test2>
  <test2 v-bind:title="title"></test2>
  <test v-on:titleChange="updateTitle($event)" v-bind:title1="title1"></test>
  <test v-bind:title1="title1"></test>
</div>
</template>

<script>
// 传值：string number boolean  可以修改单独的
// 引用：array object 修改改变全部
import Test2 from '@/components/test1'
import Test from '@/components/test'
export default {
  name: 'test1',
  components: {
    'test2': Test2,
    'test': Test
  },
  data () {
    return {
      title: ['文字111', '文字222'],
      title1: '33333333333333'
    }
  },
  methods: {
    updateTitle (title) {
      this.title1 = title
    }
  }
}
</script>

<style>
body{background: #fff}
</style>
