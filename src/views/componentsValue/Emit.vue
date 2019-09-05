<template>
<div>
  {{EmitSeed}}
  <button @click="changeClick">emit传值</button>
</div>
</template>

<script>
export default {
  name: 'Emit',
  props: {
    EmitSeed: {
      type: String,
      required: true
    }
  },
  methods: {
    changeClick () {
      this.$emit('emitClick', '这是传过来的值')
    }
  }
}
</script>

<style scoped>

</style>
