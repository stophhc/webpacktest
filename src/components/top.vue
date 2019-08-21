<template>
    <div>
       <div class="top">
           <div class="logo"><img src="https://img.ssl.q1.com/lw/images/20170215_main/logo_v2.png?v=1" alt="龙武"></div>
           <div class="xftj"><app-server v-bind:server="server"></app-server></div>
           <div class="top_video" @click="topVideo"></div>

           <div class="menu" @mouseover="mouseover()" @mouseout="mouseout()">
               <ul class="menu_one">
                   <li :key="item.id" v-for="item in menu"><a :href="item.itemsHref" target="_blank" class="menu_list_a">{{item.itemsName}}</a><span>{{item.itemsSpan}}</span></li>
               </ul>
               <ul class="menu_tow">
                   <li><span :key="item.id" v-for="item in news"><a :href="item.itemsHref" target="_blank">{{item.itemsName}}</a></span></li>
                   <li><span :key="item.id" v-for="item in gameShow"><a :href="item.itemsHref" target="_blank">{{item.itemsName}}</a></span></li>
                   <li><span :key="item.id" v-for="item in download"><a :href="item.itemsHref" target="_blank">{{item.itemsName}}</a></span></li>
                   <li><span :key="item.id" v-for="item in service"><a :href="item.itemsHref" target="_blank">{{item.itemsName}}</a></span></li>
               </ul>
           </div>
       </div>
    </div>
</template>

<script>
import Server from '@/components/server'
export default {
  components: {
    appServer: Server
  },
  data () {
    return {
      menu: [
        {itemsHref: '/main.html', itemsName: '官网首页', itemsSpan: 'HOME PAGE'},
        {itemsHref: '/main.html', itemsName: '新闻中心', itemsSpan: 'NEWS'},
        {itemsHref: '/main.html', itemsName: '游戏展示', itemsSpan: 'GAME SHOW'},
        {itemsHref: '/download/index.html', itemsName: '游戏下载', itemsSpan: 'DOWNLOAD'},
        {itemsHref: '/main.html', itemsName: '客服中心', itemsSpan: 'SERVICE CENTER'},
        {itemsHref: '/main.html', itemsName: '游戏论坛', itemsSpan: 'GAME FORM'}

      ],
      server: [
        {text: '龙争'},
        {text: '虎斗'}
      ],
      news: [
        {itemsHref: 'http://lw2.q1.com//JzNewsFile/JZT0/P1.html', itemsName: '综 合'},
        {itemsHref: 'http://lw2.q1.com//JzNewsFile/T29/P1.html', itemsName: '新 闻'},
        {itemsHref: 'http://lw2.q1.com//JzNewsFile/T27/P1.html', itemsName: '公 告'},
        {itemsHref: 'http://lw2.q1.com//JzNewsFile/T28/P1.html', itemsName: '活动'}
      ],
      gameShow: [
        {itemsHref: 'http://lw2.q1.com//jzarticle/ziliao.html', itemsName: '游戏资料'},
        {itemsHref: 'http://lw2.q1.com//zt/xszn.html', itemsName: '新手指南'},
        {itemsHref: 'http://lw2.q1.com//zhiye/', itemsName: '宗派展示'},
        {itemsHref: 'http://lw2.q1.com//zt/index.html', itemsName: '特色专题'},
        {itemsHref: 'http://lw2.q1.com//sjsy/video.html', itemsName: '视觉盛宴'}
      ],
      download: [
        {itemsHref: '/download/index.html', itemsName: '客户端下载'},
        {itemsHref: '/download/mend.html', itemsName: '补丁下载'},
        {itemsHref: '/download/cjwt.html', itemsName: '常见问题'}
      ],
      service: [
        {itemsHref: 'http://service.q1.com/LW/HelpSelf', itemsName: '服务专区'},
        {itemsHref: 'http://kf.q1.com/LW/FunctionPage?GameID=3', itemsName: '自助服务'},
        {itemsHref: 'http://service.q1.com/Question/HotQuestion?ProductID=12', itemsName: '常见问题'},
        {itemsHref: 'http://zbg.lw.q1.com/GoodsTrade/TradeMain', itemsName: '珍宝阁'}
      ]
    }
  },
  methods: {
    mouseover: function () { $('.menu_tow').show() },
    mouseout: function () { $('.menu_tow').hide() },
    topVideo: function () {
      $('.zz_video').height($(document).height())
      $('.zz_video ,.tc_video').show()
      $('.tc_videoN').html("<embed width='800' height='500' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer'  quality='high' allowscriptaccess='always' FlashVars='videourl=https://sres.q1.com/flv/lw/main_190614.flv&&autoplay=1&&repeat=1' allowfullscreen='true' src='https://sres.q1.com/flv/webPlayer.swf' wmode='transparent' name='player'></embed>")
      $('.video_close').click(function () {
        $('.zz_video ,.tc_video').hide()
        $('.tc_videoN').html('')
      })
    }
  }
}
</script>

<style scoped>
    .top{width: 1200px;height: 756px;margin: 0 auto;position: relative}
    .logo {position: absolute;top: 10px;left: 0;z-index: 1;}
    .top_video{ background:none;width:86px;height:86px;position: absolute;left:795px;top:383px;cursor:pointer;}
    .menu{width:1079px; height:65px;position:absolute; top:10px; left:208px;/* overflow:hidden;*/}
    .menu_one{ margin-top:17px; height:40px;position:relative;}
    .menu_one li{ float:left; display:inline;height:40px;text-align:center; width:176px;}
    .menu_one li a{display:block;font-weight:bold; font-size:14px; color:#000;}
    .menu_one li span{ display:block; color:#c3c3c3}
    .menu_one li a:hover{ color:#000; text-decoration:none;}
    .menu_tow{ margin-top:5px;display: none;margin-left: 175px;}
    .menu_tow li{float:left; display:inline;text-align:center; width:176px;}
    .menu_tow li span{ display:block; margin-bottom:1px;}
    .menu_tow li a{color:#000; padding:0 13px; line-height:16px; display:inline-block; height:16px;}
    .menu_tow li a:hover{  color:#000; text-decoration:underline;}
    .xftj{background: url(https://img.ssl.q1.com/lw/images/login/login190216/icon.png?v=1) no-repeat -129px -40px;width:236px;height: 36px;position: absolute; right:0;bottom:10px;overflow: hidden;}
</style>
