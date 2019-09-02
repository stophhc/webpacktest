<template>
   <div>
     <ul class="mulitline1">
       <li><span :key="itme.id" v-for="itme in server">{{itme.text}}</span></li>
     </ul>
   </div>
</template>

<script>
export default {
  // 传值：string number boolean
  // 引用：array object
  name: 'server',
  // props: ['server'],
  props: {
    server: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
    .mulitline1{ position:absolute; height:26px; line-height:26px; width:180px; overflow:hidden;top:5px;left:107px; }
    .mulitline1 span {display: inline-block;color: #ffd375;width: 45px;text-align: center;font-size: 14px;height: 26px;}
</style>
