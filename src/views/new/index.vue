<template>
  <div>
    <commonTop></commonTop>
    <app-top></app-top>
    <div class="main">
      <app-left></app-left>
      <div class="right">
        <div class="tit1">
          <span>您所在的位置：<router-link :to="'/'">首页</router-link> ＞ 新闻中心 </span>
          <h2>新闻中心</h2><i></i><em>NEWS</em>
        </div>
        <div class="newsW">
          <div class="tit2">
            <router-link :key="item.id" v-for="item in downTe[2].children" :to="{name:item.name}">{{item.meta.title}}</router-link>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </div>
    <copy></copy>
  </div>

</template>

<script>
import { downLoad1 } from '@/router'
export default {
  computed: {
    downTe () {
      return downLoad1()
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
  .newsW{ padding:35px 63px;}
  .tit2 a{width:136px;}
  .tit2 a{  height:40px; line-height:40px; text-align:center; color:#fff; display:inline-block; background:#505372; margin-right:1px; font-size:14px;}
  .tit2 a:hover ,.tit2 a.router-link-active{ background:#cfae69; color:#282b4a;}

  /*cjwt*/
  .tit3{ margin-top:35px;}
  .tit3 strong{ display:inline-block; font-size:14px;border-left:2px solid #cfae69; padding-left:8px; line-height:16px;}
  .tit3 span{ color:#7c78bd; padding-left:20px;}
  .cjwt_list{ border-bottom:1px dotted #adacc6; padding-bottom:35px;}
  .cjwt_listN{ padding-left:10px; line-height:24px; margin-top:10px;}
  .tit3 i{ font-style:normal; display:block;font-size:14px; font-weight:bold; padding-left:10px; margin-top:3px;}
</style>
