<template>
    <div>
      <span :key="item.id" v-for="item in title">{{item}}</span>
      <button v-on:click="deleteText">删除</button>
      <div ref="msgDiv">{{msg}}</div>
      <div v-if="msg1">Message got outside $nextTick: {{msg1}}</div>
      <div v-if="msg2">Message got inside $nextTick: {{msg2}}</div>
      <div v-if="msg3">Message got outside $nextTick: {{msg3}}</div>
      <button @click="changeMsg">Change the Message</button>
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
  data () {
    return {
      msg: 'Hello Vue.',
      msg1: '',
      msg2: '',
      msg3: ''
    }
  },
  methods: {
    deleteText () {
      this.title.pop()
    },
    changeMsg () {
      this.msg = 'Hello world.'
      this.msg1 = this.$refs.msgDiv.innerHTML
      this.$nextTick(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML
      })
      this.msg3 = this.$refs.msgDiv.innerHTML
    },
    changeSet () {
      this.$set()
    }
  }
}
</script>

<style scoped>

</style>
