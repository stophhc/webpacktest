<template>
    <div>
      {{title1}}
      {{title2}}
      <button v-on:click="deleteText">删除</button>
      <button v-on:click="changeTitle">改变</button>
    </div>
</template>

<script>
export default {
  name: 'test',
  props: {
    title1: {
      type: String,
      required: true
    }
  },
  methods: {
    deleteText () {
      this.title1 = 'dddd'
    },
    changeTitle () {
      this.$emit('titleChange', '子向父组件传值')
    },
    stophhc () {
      this.$router.go(-1)// 后退
      this.$router.replace({name: 'test1'})// 跳转到指定路由页面
      this.$router.push({name: 'test1'})// 跳转到指定路由页面
    }
  }
}
</script>

<style scoped>

</style>
