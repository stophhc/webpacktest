<template>
    <ul class="mulitline1">
            <li><span :key="itme.id" v-for="itme in server">{{itme.text}}</span></li>
    </ul>
</template>

<script>
export default {
  name: 'server',
  data () {
    return {
      server: [
        {text: '龙争'},
        {text: '虎斗'}
      ]
    }
  }
}
</script>

<style scoped>
    .mulitline1{ position:absolute; height:26px; line-height:26px; width:180px; overflow:hidden;top:5px;left:107px; }
    .mulitline1 span {display: inline-block;color: #ffd375;width: 45px;text-align: center;font-size: 14px;height: 26px;}
</style>
