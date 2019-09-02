<template>
    <div>
      <span :key="item.id" v-for="item in title">{{item}}</span>
      <button v-on:click="deleteText">删除</button>
    </div>
</template>

<script>
export default {
  name: 'test1',
  props: {
    title: {
      type: Array,
      required: true
    }
  },
  methods: {
    deleteText () {
      this.title.pop()
    }
  }
}
</script>

<style scoped>

</style>
