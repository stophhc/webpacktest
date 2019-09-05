<template>
<div>
  <test v-on:titleChange="updateTitle($event)" v-bind:title2="title2"></test>
  <test v-bind:title1="title1"></test>
</div>
</template>

<script>
// 传值：string number boolean  可以修改单独的
// 引用：array object 修改改变全部
import Test from '@/components/test'
export default {
  name: 'test1',
  components: {
    'test': Test
  },
  data () {
    return {
      title: ['文字111', '文字222'],
      title1: '111111111111111',
      title2: '222222222222222'
    }
  },
  methods: {
    updateTitle (title) {
      this.title2 = title
    }
  }
}
</script>

<style>
body{background: #fff}
</style>
