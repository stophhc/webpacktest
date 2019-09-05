<template>
<div>
  {{propSeed}}
  <button v-on:click="propClick">点击</button>
</div>
</template>

<script>
export default {
  name: 'Prop',
  props: {
    propSeed: {
      type: String,
      required: true
    }
  },
  methods: {
    propClick () {
      this.propSeed = '改变后的'
    }
  }
}
</script>

<style scoped>

</style>
