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
    img{border:none; vertical-align:top;}
    li{ list-style:none;}
    i,em{ font-style:normal;}
</style>