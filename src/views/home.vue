<template>
    <div>
        <app-top></app-top>
        <div class="main">
            <app-left></app-left>
            <div class="right">

            </div>
        </div>

        <div class="zz_video"></div>
        <div class="tc_video">
            <div class="video_close"></div>
            <div class="tc_videoN"></div>
        </div>
    </div>
</template>

<script>
    import Top from '@/components/top'
    import Left from '@/components/left'
    export default {
        components:{
            appTop:Top,
            appLeft:Left
        }
    }
</script>

<style scoped>
    .main{width: 1200px;margin: 0 auto}
    .right{position: relative;width: 948px; float:right;}
</style>