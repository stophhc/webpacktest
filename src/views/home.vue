<template>
    <div>
        <app-top></app-top>
        <div class="main">
            <app-left></app-left>
            <div class="right">
                <app-focus></app-focus>
                <!--新闻-->
                <div class="new loop">
                    <div class="title">
                        <ul>
                            <li class="tit_hover"><a href="/JzNewsFile/JZT0/P1.html" target="_blank">综合</a></li>
                            <li><a href="#" target="_blank">公告</a></li>
                            <li><a href="#" target="_blank">活动</a></li>
                            <li><a href="#" target="_blank">新闻</a></li>
                            <li><a href="#" target="_blank">维护</a></li>
                        </ul>
                        <a href="/JzNewsFile/JZT0/P1.html" target="_blank"></a> </div>
                    <div class="p1">
                        <div class="p1N">
                            <div class="p1_list hui">
                                <ul>
                                    <li><span class=date>[07/31]</span><span class=typename>【<a href='#' target=_blank>公告</a>】</span><a href='#' target='_blank'><b><font color=red>8月2日14时1组新服火爆开启..</font></b></a>&nbsp;<span></span> </li>
                                    <li><span class=date>[07/30]</span><span class=typename>【<a href='#' target=_blank>维护</a>】</span><a href='#' target='_blank'>7月31日7:00~9:00更新维护公..</a>&nbsp;<span></span> </li>
                                </ul>
                            </div>
                            <div class="p1_list"></div>
                            <div class="p1_list"></div>
                            <div class="p1_list"></div>
                            <div class="p1_list"></div>
                        </div>
                    </div>
                </div>
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
    import Focus from '@/components/focus'
    export default {
        components:{
            appTop:Top,
            appLeft:Left,
            appFocus:Focus,
        }
    }
</script>

<style scoped>
    .main{width: 1200px;margin: 0 auto}
    .right{position: relative;width: 948px; float:right;}
    .new{width: 293px;height: 260px;background:#fff; float: right;padding:15px 15px 0 15px;}
    .new:hover ,.ziliao:hover ,.zhiye:hover ,.wjzs:hover ,.wjzq:hover ,.media:hover ,.fast:hover ,.service:hover ,.left_btm:hover ,.marvellous:hover ,.main_fd:hover{box-shadow:0 0 10px rgba(0,0,0,.3)}
    .title li{ float: left;cursor: pointer; font-size: 14px; line-height: 30px; width: 58px; text-align: center;}
    .title{ overflow: hidden;zoom:1;position: relative;}
    .title ul{border-bottom: 1px solid #b2b2b2; height: 30px;}
    .bor{ background:#7b7cd8;width: 55px; height: 3px; position: absolute; left: 0; top:28px; z-index: 1}
    .tit_hover{ color: #7778d7; }
    .p1_list li{font-size: 12px; color: #8f8f8f; line-height: 33px;}
    .p1_list li a{color: #8f8f8f}
    .date{float: right;}
    .p1{position: relative; overflow: hidden;width: 293px; height: 230px;}
    .p1_list{float: left;width: 293px; display:none;}
    .hui{ display:block}
    .p1N{position: absolute;}
    .p1_list li.first_child{ color: #ed8578;font-size: 15px; text-align: center; padding: 16px 0 7px 0;font-weight: bold;}
    .p1_list li.first_child a{color: #ff0000;}
    .first_child .date{ display: none; }
    .first_child .typename{ display: none; }
    .new .p1N{}
    .new .tit_hover{ border-bottom:2px solid #7b7cd8; font-weight:bold;}
    .new .tit_hover a{color:#de0000}
    .new .title a{ background:none;}
    .new a:hover{ color:#de0000}
</style>