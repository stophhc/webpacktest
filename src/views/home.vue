<template>
    <div>
        <app-menu></app-menu>
    </div>
</template>

<script>
    import Menu from '@/components/menu'
    export default {
        components:{
            appMenu:Menu
        }
    }
</script>

<style scoped>
    *{margin:0;padding:0;}
    img{border:none; vertical-align:top;}
    li{ list-style:none;}
    i,em{ font-style:normal;}
    a{color:#8f8f8f;}
    div{background: #000;width: 500px;height: 500px;}
</style>