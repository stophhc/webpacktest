<template>
    <div>
       <div class="menu">
       <ul class="menu_one">
           <li class="menu_list1"><a href="/main.html" target="_blank" class="menu_list_a">官网首页</a><span>HOME PAGE</span></li>
           <li><a href="/JzNewsFile/JZT0/P1.html" target="_blank" class="menu_list_a">新闻中心</a><span>NEWS</span></li>
           <li><a href="/jzarticle/ziliao.html" target="_blank" class="menu_list_a">游戏展示</a><span>GAME SHOW</span></li>
           <li class="menu_list4"><a href="/download/index.html" target="_blank" class="menu_list_a">游戏下载</a><span>DOWNLOAD</span></li>
           <li><a href="http://service.q1.com/LW/HelpSelf" target="_blank" class="menu_list_a">客服中心</a><span>SERVICE CENTER </span></li>
           <li class="menu_list6"><a href="http://bbs.lw.q1.com/" target="_blank" class="menu_list_a">游戏论坛</a><span>GAME FORM</span></li>
           </ul>
       <ul class="menu_tow">
           <li class="menu_list1"></li>
           <li>
               <span><a href="/JzNewsFile/JZT0/P1.html" target="_blank">综 合</a></span>
               <span><a href="/JzNewsFile/T29/P1.html" target="_blank">新 闻</a></span>
               <span><a href="/JzNewsFile/T27/P1.html" target="_blank">公 告</a></span>
               <span><a href="/JzNewsFile/T28/P1.html" target="_blank">活 动</a></span>
               </li>
           <li>
               <span><a href="/jzarticle/ziliao.html" target="_blank">游戏资料</a></span>
               <span><a href="/zt/xszn.html" target="_blank">新手指南</a></span>
                <span><a href="/zhiye/" target="_blank">宗派展示</a></span>
                <span><a href="/zt/index.html" target="_blank">特色专题</a></span>
               <span><a href="/sjsy/video.html" target="_blank">视觉盛宴</a></span>
               </li>
           <li>
               <span><a href="/download/index.html" target="_blank">客户端下载</a></span>
               <span><a href="/download/mend.html" target="_blank">补丁下载</a></span>
               <span><a href="/download/cjwt.html" target="_blank">常见问题</a></span>
               </li>
           <li>
               <span><a href="http://service.q1.com/LW/HelpSelf" target="_blank">服务专区</a></span>
               <span><a href="http://kf.q1.com/SelfService/FunctionPage?GameID=3" target="_blank">自助服务</a></span>
               <span><a href="http://service.q1.com/Question/HotQuestion?ProductID=12" target="_blank">常见问题</a></span>
               <span><a href="http://zbg.lw.q1.com/GoodsTrade/TradeMain" target="_blank">珍宝阁</a></span>
               </li>
           <li>
               </li>
           </ul>
       </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .menu{width:1079px; height:65px;position:absolute; top:10px; left:208px; overflow:hidden;}
    .menu_one{ margin-top:17px; height:40px;}
    .menu_hover1{ background:rgba(255, 255, 255, 0.70)!important;
        filter:Alpha(opacity=70); background:#fff; height:185px; display:none; width:779px;}
    .menu_one{ position:relative;}
    .menu_one li{ float:left; display:inline;height:40px;text-align:center; width:176px;}
    .menu_one li.menu_list1{ border-left:none;}
    .menu_one li.menu_list6{ border-right:none;}
    .menu_one li a{display:block;font-weight:bold; font-size:14px; color:#000;}
    .menu_one li span{ display:block; color:#c3c3c3}
    .menu_one li a:hover{ color:#000; text-decoration:none;}
    .menu_tow{ margin-top:5px;}
    .menu_tow li{float:left; display:inline;height:40px;text-align:center; width:176px;height:108px;}
    .menu_tow li span{ display:block; margin-bottom:1px;}
    .menu_tow li a{color:#000; padding:0 13px; line-height:16px; display:inline-block; height:16px;}
    .menu_tow li a:hover{  color:#000; text-decoration:underline;}
    .mulitline1{ position:absolute; height:26px; line-height:26px; width:180px; overflow:hidden;top:5px;left:107px; }
</style>