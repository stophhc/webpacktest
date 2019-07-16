<template>
    <div>222</div>
</template>

<script>
    export default {
       methods:{
           stophhc(){
               this.$router.go(-1);//后退
               this.$router.replace({name:'test1'})//跳转到指定路由页面
               this.$router.push({name:'test1'})//跳转到指定路由页面
           }
       }
    }
</script>

<style scoped>

</style>