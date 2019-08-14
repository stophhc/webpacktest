<template>
    <div class="left">
        <div class="left_top loop">
            <div class="down"><!--<a :href="leftTitle.leftTopHref">{{leftTitle.leftTop}}</a>--><router-link :to="'/download'">{{leftTitle.leftTop}}</router-link></div>
            <div class="nav">
                <ul>
                    <li :key="itme.id" v-for="itme in nav" :class="itme.className"><span></span><a :href="itme.itemsHref" target="_blank">{{itme.itemsName}}</a> </li>
                </ul>
            </div>

            <div class="fast loop">
                <ul>
                    <li :key="itme.id" v-for="itme in fast" :class="itme.className"><span></span><a :href="itme.itemsHref" target="_blank">{{itme.itemsName}}</a> </li>
                </ul>
            </div>

            <div class="service loop">
                <div class="tit">{{leftTitle.serviceTit}}</div>
                <div class="serviceN">
                    <ul>
                        <li :key="itme.id" v-for="itme in service" :class="itme.className"><a :href="itme.itemsHref" target="_blank"><span></span>{{itme.itemsName}}</a> </li>
                    </ul>
                    <a :href="leftTitle.serviceLyHref" target="_blank" class="lx left_list"><span></span><i></i>{{leftTitle.serviceLy}}</a>
                    <div class="phone left_list"><span></span><i></i>{{leftTitle.servicePhone}}</div>
                </div>
            </div>

            <div class="left_btm loop">
                <div class="contact">
                    <div class="tit">{{leftTitle.contactTit}}</div>
                    <div class="contactN">
                        <div class="ewm"><img src="https://img.ssl.q1.com/lw/images/20170215_main/ewm.gif?v=1" /></div>
                        <div class="weixin left_list"><span></span><i></i>{{leftTitle.contactWx}}</div>
                        <a href="http://e.weibo.com/hotlongwu" target="_blank" class="wb_sina left_list"><span></span><i></i>{{leftTitle.contactWb}}</a>
                        <div class="qq left_list"><span></span><i></i>交流群：{{leftTitle.contactQq}}</div>
                    </div>
                </div>

                <div class="hezuo">
                    <div class="tit">{{leftTitle.hezuoTit}}</div>
                    <div class="link" @click="linkClick()" @mouseenter="mouseenter()" @mouseleave="mouseleave()">
                        <div class="link_title">{{leftTitle.linkTie}}</div>
                        <div class="link_text">
                            <a :key="time.id" v-for="time in links" :href="time.itemsHref" target="_blank">{{time.itemsName}}</a>
                    </div>
                    </div>
                </div>

                <div class="hall">
                <div class="tit">龙武大间谍第二季</div>
                <div class="hall_img">
                    <div class="hall_jtl"></div>
                    <div class="hall_jtr"></div>
                    <a :key="index" v-for="(itme,index) in hall" :class="{'active':index==0}" :href="itme.itemsHref" target="_blank"><img :src="itme.itemsImg"></a>
                </div>
                <div class="hall_wz"><h2>我想收集你生活的每一刻<br/>找寻属于你的感动和故事</h2></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'left',
  data () {
    return {
      leftTitle: {
        leftTop: '游戏下载',
        leftTopHref: '/download/index.html',
        serviceTit: '客服中心',
        serviceLy: '联系客服',
        serviceLyHref: 'http://service.q1.com/LW/HelpSelf',
        servicePhone: '0755-86067666',
        contactTit: '关注我们',
        contactWx: 'HOTLONGWU',
        contactWb: '新浪微博',
        contactQq: '273704598',
        hezuoTit: '合作伙伴',
        linkTie: '《龙武》官方合作媒体'
      },
      nav: [
        {itemsHref: 'http://passport.q1.com/zhuce.html', itemsName: '账号注册', className: 'nav_1'},
        {itemsHref: 'http://lw.q1.com/zt/xszn.html?18', itemsName: '新手指南', className: 'nav_2'},
        {itemsHref: 'http://pay.lw.q1.com/', itemsName: '账号充值', className: 'nav_3'},
        {itemsHref: 'http://bbs.lw.q1.com/forum.php', itemsName: '游戏论坛', className: 'nav_4'}
      ],
      fast: [
        {itemsHref: 'http://lw2.q1.com/zt/sqxt.html', itemsName: '账号授权', className: 'fast_1'},
        {itemsHref: 'http://passport.q1.com/', itemsName: '账号管理', className: 'fast_2'},
        {itemsHref: 'http://lw.q1.com/api/myActors.html', itemsName: '查询角色', className: 'fast_3'},
        {itemsHref: 'http://passport.q1.com/Html/Account/RealNameAuthent.html?m', itemsName: '防沉迷', className: 'fast_4'},
        {itemsHref: 'http://passport.q1.com/Html/Account/ChangePassword.html', itemsName: '密码修改', className: 'fast_5'},
        {itemsHref: 'http://vip.q1.com/Home/Login', itemsName: 'VIP专区', className: 'fast_6'}
      ],
      service: [
        {itemsHref: 'http://passport.q1.com/Html/Account/ChangePassword.html?m', itemsName: '找回密码', className: 'service_1'},
        {itemsHref: 'http://service.q1.com/LW/HelpSelf', itemsName: '被盗处理', className: 'service_2'},
        {itemsHref: 'http://service.q1.com/LW/HelpSelf', itemsName: '充值错误', className: 'service_3'},
        {itemsHref: 'http://kf.q1.com/ServiceCenter/SelfService', itemsName: '自助服务', className: 'service_4'},
        {itemsHref: 'http://service.q1.com/LW/HelpSelf', itemsName: '客服专区', className: 'service_5'},
        {itemsHref: 'http://passport.q1.com/Html/Appeal/Portal.html?m', itemsName: '账号申诉', className: 'service_6'},
        {itemsHref: 'http://zbg.lw.q1.com/GoodsTrade/TradeMain', itemsName: '珍 宝 阁', className: 'service_7'},
        {itemsHref: 'http://service.q1.com/LW/BugReport', itemsName: 'BUG提交', className: 'service_8'}

      ],
      links: [
        {itemsHref: 'http://www.xskhome.com', itemsName: '新手卡之家'},
        {itemsHref: 'http://tieba.baidu.com/f?kw=%E9%BE%99%E6%AD%A6', itemsName: '百度龙武吧'},
        {itemsHref: 'http://www.19yxw.com/longwu', itemsName: '19游戏网'},
        {itemsHref: 'http://www.07076.cn', itemsName: '07076'},
        {itemsHref: 'http://www.92wy.com', itemsName: '万宇'},
        {itemsHref: 'http://www.iwanboy.com', itemsName: '爱玩游戏网'},
        {itemsHref: 'http://www.h231.com', itemsName: 'H231游戏网'},
        {itemsHref: 'http://www.ka114.net', itemsName: '万卡园'},
        {itemsHref: 'http://www.fahao8.com', itemsName: '发号吧'},
        {itemsHref: 'http://www.58game.com/card/795.html', itemsName: '58Game'},
        {itemsHref: 'http://www.zhaichong.com', itemsName: '宅虫网'},
        {itemsHref: 'http://www.jidi.com', itemsName: '基地游戏'},
        {itemsHref: 'http://www.dingyx.com/lw.html', itemsName: '顶级资讯网'},
        {itemsHref: 'http://www.wyedt.com', itemsName: '网游一点通'},
        {itemsHref: 'http://www.gk99.com/game/2013/04/10-4963.html', itemsName: '游戏港口'},
        {itemsHref: 'http://www.9u.com/webgame/lw', itemsName: '九游网'},
        {itemsHref: 'http://game.ghjie.com/25D/2013/04/87166066637964.shtml', itemsName: '公会界'},
        {itemsHref: 'http://db.2u.com.cn', itemsName: '兔友网'},
        {itemsHref: 'http://www.ghbar.com/games/longwu', itemsName: '公会吧'},
        {itemsHref: 'http://www.7mgame.com/portal.php?mod=topic&topicid=174', itemsName: '齐名游戏网'},
        {itemsHref: 'http://www.ghbar.com/games/longwu', itemsName: '多游网'},
        {itemsHref: 'http://xin.sgamer.com/special/lw.html', itemsName: '超级玩家'},
        {itemsHref: 'http://game.china.com/gbox/longwu/index.html', itemsName: '中华网'},
        {itemsHref: 'http://51mxd.com/game/longwu', itemsName: '无忧冒险岛'},
        {itemsHref: 'http://www.121121.net', itemsName: '121快游网'},
        {itemsHref: 'http://www.5game.cn', itemsName: '微端网游'},
        {itemsHref: 'http://www.51lieyou.com', itemsName: '51猎游'},
        {itemsHref: 'http://www.361games.com/index.html', itemsName: '361游戏网'},
        {itemsHref: 'http://www.114la.com', itemsName: '114啦网址导航'},
        {itemsHref: 'http://www.1616.net', itemsName: '1616个人门户'},
        {itemsHref: 'http://www.fahao.cc', itemsName: '发号网'},
        {itemsHref: 'http://www.youxiping.com/article.php?act=list&catid=0&keyword=龙武', itemsName: '游戏瓶'},
        {itemsHref: 'http://www.1000so.com', itemsName: '千搜游戏贴吧'},
        {itemsHref: 'http://www.boosj.com', itemsName: '播视网'},
        {itemsHref: 'http://www.kuai8.com/', itemsName: '快吧游戏'},
        {itemsHref: 'http://game.iqilu.com/wlyx/2015/0116/2281794.shtml', itemsName: '齐鲁网游戏频道'},
        {itemsHref: 'http://www.719k.com/', itemsName: '719k游戏网'},
        {itemsHref: 'http://www.te5.com/', itemsName: '特玩网'},
        {itemsHref: 'http://www.youxiwangguo.com/', itemsName: '游戏王国'},
        {itemsHref: 'http://www.i1758.com/', itemsName: '爱一起玩吧'},
        {itemsHref: 'http://www.ewoka.com/', itemsName: 'E蜗卡'},
        {itemsHref: 'http://www.xzking.com', itemsName: '下载王'},
        {itemsHref: 'http://ol.ali213.net', itemsName: '游侠网游'}
      ],
      hall: [
        {itemsHref: 'http://lw2.q1.com/huodong/lwdjd2.html?7', itemsImg: 'https://img.ssl.q1.com/lw/images/20170215_main/djd2_img7.jpg?v=1'},
        {itemsHref: 'http://lw2.q1.com/huodong/lwdjd2.html?6', itemsImg: 'https://img.ssl.q1.com/lw/images/20170215_main/djd2_img6.jpg?v=1'},
        {itemsHref: 'http://lw2.q1.com/huodong/lwdjd2.html?5', itemsImg: 'https://img.ssl.q1.com/lw/images/20170215_main/djd2_img5.jpg?v=1'},
        {itemsHref: 'http://lw2.q1.com/huodong/lwdjd2.html?4', itemsImg: 'https://img.ssl.q1.com/lw/images/20170215_main/djd2_img4.jpg?v=1'},
        {itemsHref: 'http://lw2.q1.com/huodong/lwdjd2.html?3', itemsImg: 'https://img.ssl.q1.com/lw/images/20170215_main/djd2_img3.jpg?v=1'},
        {itemsHref: 'http://lw2.q1.com/huodong/lwdjd2.html?2', itemsImg: 'https://img.ssl.q1.com/lw/images/20170215_main/djd2_img2.jpg?v=1'},
        {itemsHref: 'http://lw2.q1.com/huodong/lwdjd2.html?1', itemsImg: 'https://img.ssl.q1.com/lw/images/20170215_main/djd2_img1.jpg?v=1'}
      ]
    }
  },

  methods: {
    linkClick: function () {
      $('.link_text').show()
    },
    mouseenter: function () {
      $('.link_title').addClass('link_a')
    },
    mouseleave: function () {
      $('.link_text').hide()
      $('.link_title').removeClass('link_a')
    }
  },
  mounted () {
    var lwdjd1 = 0
    var picTimer
    var len11 = $('.hall_img a').length
    $('.hall_img').hover(function () {
      clearInterval(picTimer)
    }, function () {
      picTimer = setInterval(function () {
        $('.hall_img a').stop(true, false).hide().eq(lwdjd1).show()
        // alert(index123)
        lwdjd1++
        if (lwdjd1 === len11) { lwdjd1 = 0 }
      }, 3000)
    }).trigger('mouseleave')
    $('.hall_jtl').click(function () {
      lwdjd1--
      if (lwdjd1 === -1) { lwdjd1 = len11 - 1 }
      $('.hall_img a').stop(true, false).hide().eq(lwdjd1).show()
    })
    $('.hall_jtr').click(function () {
      lwdjd1++
      if (lwdjd1 === len11) { lwdjd1 = 0 }
      $('.hall_img a').stop(true, false).hide().eq(lwdjd1).show()
    })
  }

}
</script>

<style scoped>
    .left{width: 237px;float:left;}
    .down a{background:url(https://img.ssl.q1.com/lw/images/20170215_main/down.gif?v=1) no-repeat;width: 237px;height: 130px;display:block; text-indent: -99999em;}

    .nav li span ,.fast li span ,.serviceN li span ,.lx span ,.phone span ,.weixin span ,.wb_sina span ,.wb_tx span ,.link_title,.qq span{}

    .nav{background:#4f4f8b; height: 145px;}
    .nav li{overflow: hidden;float: left;width: 118px; display: inline-block; height: 72px; text-align: center; position: relative;-webkit-transition:all .5s ease-out 0s;transition:all .5s ease-out 0s;}
    .nav li.nav_1{ border-bottom:1px solid #59599c;border-right:1px solid #59599c; }
    .nav li.nav_2{ border-bottom:1px solid #59599c; }
    .nav li.nav_3{ border-right:1px solid #59599c;}
    .nav li:hover{ background: #6263b1; }
    .nav li:hover span{ top:-44px;    opacity: 0; }
    .nav li:hover a{ padding-top: 17px; color: #dbdfff;height:55px;}
    .nav li a{ display: inline-block;color: #dbdfff;  width: 100%; padding-top: 37px; -webkit-transition:all .3s ease-out 0s,padding .3s ease-out .05s,height .3s ease-out .05s;transition:all .3s ease-out 0s,padding .3s ease-out .05s,height .3s ease-out .05s;}
    .nav li span{ display:block;width:24px;height: 23px; position:absolute; top:15px; left: 50%; margin-left: -12px;-webkit-transition:all .7s ease-out 0s;transition:all .7s ease-out 0s;}
    .nav li.nav_1 span{background:url(https://img1.ssl.q1.com/lw/images/20170215_main/icon.png?v=2) no-repeat 0 0;}
    .nav li.nav_2 span{background:url(https://img1.ssl.q1.com/lw/images/20170215_main/icon.png?v=2) no-repeat -26px 0;}
    .nav li.nav_3 span{background:url(https://img1.ssl.q1.com/lw/images/20170215_main/icon.png?v=2) no-repeat -52px 0;}
    .nav li.nav_4 span{background:url(https://img1.ssl.q1.com/lw/images/20170215_main/icon.png?v=2) no-repeat -79px 0;}

    .fast{background:#3a3a3a; height:265px; margin-top: 15px;}
    .fast li{overflow: hidden; width: 118px; height: 88px; float: left; position: relative;text-align: center; -webkit-transition:all .5s ease-out 0s;transition:all .5s ease-out 0s;}
    .fast li span{display:block;width: 42px; height: 36px;position:absolute; top:15px; left: 50%; margin-left: -21px;-webkit-transition:all .7s ease-out 0s;transition:all .7s ease-out 0s;}
    .fast li a{display: inline-block; color: #d4d4d4; width: 100%; padding-top: 58px; -webkit-transition:all .3s ease-out 0s,padding .3s ease-out .05s,height .3s ease-out .05s;transition:all .3s ease-out 0s,padding .3s ease-out .05s,height .3s ease-out .05s;}
    .fast li:hover{ background: #4e4e4e; }
    .fast li:hover span{ top:-44px;    opacity: 0; }
    .fast li:hover a{ padding-top: 32px; color: #dbdfff;height:55px;}
    .fast li.fast_1 span{background:url(https://img1.ssl.q1.com/lw/images/20170215_main/icon.png?v=2) no-repeat 0 -29px;}
    .fast li.fast_2 span{background:url(https://img1.ssl.q1.com/lw/images/20170215_main/icon.png?v=2) no-repeat -44px -29px;}
    .fast li.fast_3 span{background:url(https://img1.ssl.q1.com/lw/images/20170215_main/icon.png?v=2) no-repeat -88px -29px;}
    .fast li.fast_4 span{background:url(https://img1.ssl.q1.com/lw/images/20170215_main/icon.png?v=2) no-repeat -133px -29px;}
    .fast li.fast_5 span{background:url(https://img1.ssl.q1.com/lw/images/20170215_main/icon.png?v=2) no-repeat -178px -29px;}
    .fast li.fast_6 span{background:url(https://img1.ssl.q1.com/lw/images/20170215_main/icon.png?v=2) no-repeat -223px -29px;}
    .fast li.fast_1{border-right:1px solid #454545;border-bottom:1px solid #454545;}
    .fast li.fast_2{border-bottom:1px solid #454545;}
    .fast li.fast_3{border-right:1px solid #454545;border-bottom:1px solid #454545;}
    .fast li.fast_4{border-bottom:1px solid #454545;}
    .fast li.fast_5{border-right:1px solid #454545; height:87px;}
    .fast li.fast_6{height:87px;}

    .service{background:#3a3a3a;margin-top: 15px; padding: 12px 14px 12px 18px; height: 297px;}
    .tit{ font-size:14px;color:#fff; border-left:2px solid #cfae69; height: 16px; line-height: 14px; padding-left:7px; font-family: "微软雅黑"}
    .serviceN{background:#424242; color: #d4d4d4;margin-top: 10px;}
    .serviceN ul{overflow:hidden;zoom:1;}
    .serviceN a{color:#d4d4d4;}
    .service li{ width:101px; float:left; height: 36px;line-height: 36px; border-bottom: 1px solid #3a3a3a;}
    .service li a{ display:block; width:101px;height: 36px;-webkit-transition: all 0.3s linear 0s; transition: all 0.3s linear 0s;}
    .service li span{ display:inline-block;width: 16px;height: 16px;margin: 0 11px 0 13px;vertical-align:middle;}
    .service a:hover{color:#d4d4d4;}
    .service li a:hover span{-webkit-transform: rotateY(180deg);transition: all 0.4s linear 0.05s;}
    .service li.service_1 span{ background:url(https://img1.ssl.q1.com/lw/images/20170215_main/icon.png?v=2) no-repeat 0 -71px; }
    .service li.service_2 span{background:url(https://img1.ssl.q1.com/lw/images/20170215_main/icon.png?v=2) no-repeat -20px -71px; }
    .service li.service_3 span{ background:url(https://img1.ssl.q1.com/lw/images/20170215_main/icon.png?v=2) no-repeat -40px -71px; }
    .service li.service_4 span{background:url(https://img1.ssl.q1.com/lw/images/20170215_main/icon.png?v=2) no-repeat -57px -71px; }
    .service li.service_5 span{background:url(https://img1.ssl.q1.com/lw/images/20170215_main/icon.png?v=2) no-repeat -76px -71px; }
    .service li.service_6 span{background:url(https://img1.ssl.q1.com/lw/images/20170215_main/icon.png?v=2) no-repeat -95px -71px; }
    .service li.service_7 span{background:url(https://img1.ssl.q1.com/lw/images/20170215_main/icon.png?v=2) no-repeat -114px -71px; }
    .service li.service_8 span{background:url(https://img1.ssl.q1.com/lw/images/20170215_main/icon.png?v=2) no-repeat -132px -71px; }
    .service li.service_1 ,.service li.service_3 ,.service li.service_5 ,.service li.service_7{border-right: 1px solid #3a3a3a;}
    .lx{ display: block; height: 56px; line-height: 56px;}
    .lx span{width: 24px; height:22px;background:url(https://img1.ssl.q1.com/lw/images/20170215_main/icon.png?v=2) no-repeat -152px -71px;}
    .left_list{border-bottom: 1px solid #3a3a3a;}
    .left_list i{background:#6e6e6e; width: 1px; overflow: hidden; display: inline-block; height: 22px; vertical-align: middle;margin: 0 11px;}
    .phone{height: 57px; line-height: 57px;}
    .left_list span{ display: inline-block;vertical-align: middle;margin: 0 0 0 22px;}
    .phone span{width: 21px;height: 24px;background:url(https://img1.ssl.q1.com/lw/images/20170215_main/icon.png?v=2) no-repeat -181px -71px; }

    .left_btm{background:#3a3a3a;margin-top: 15px; height: 657px; padding: 0 23px;color: #d4d4d4;}
    .left_btm a{color: #d4d4d4;}
    .left_btm a:hover{color: #d4d4d4;}
    .contact{padding-top: 17px;}
    .contactN{background:#424242;margin-top: 10px;}
    .ewm{ text-align: center;padding: 19px 0 ;border-bottom: 1px solid #3a3a3a;}
    .weixin{ height: 36px; line-height: 36px; }
    .weixin span{ width: 22px; height:16px; background:url(https://img1.ssl.q1.com/lw/images/20170215_main/icon.png?v=2) no-repeat -210px -74px;}
    .wb_sina{ display: block;height: 36px; line-height: 36px}
    .wb_sina span{ width: 20px;height: 16px; background:url(https://img1.ssl.q1.com/lw/images/20170215_main/icon.png?v=2) no-repeat -237px -74px; margin-right: 3px;}
    .qq{height: 36px; line-height: 36px;}
    .qq span{ width:16px; height:18px;background:url(https://img1.ssl.q1.com/lw/images/20170215_main/icon.png?v=2) no-repeat -286px -72px;margin:0 5px 0 24px;}
    .wb_tx{height: 36px; line-height: 36px;  display: block;}
    .wb_tx span{width: 16px;height: 20px;background:url(https://img1.ssl.q1.com/lw/images/20170215_main/icon.png?v=2) no-repeat -262px -71px; margin:0 4px 0 39px;}

    .hezuo .tit{margin: 15px 0 13px 0}
    .link{ position:relative; margin-top:15px;  background:#25243a; width:180px; color:#d4d4d4;}
    .link_title{ padding:1px 0 0 16px; width:175px;height:25px; line-height:26px;background:url(https://img1.ssl.q1.com/lw/images/20170215_main/icon.png?v=2) no-repeat -105px 0}
    .link_text{ position:absolute; display:none; background:#424242; left:0px;top:-307px; height:306px; overflow:auto; width:190px;}
    .link_text a{ height:20px; line-height:20px; display:block; color:#d4d4d4;text-decoration:none; padding-left:16px;}
    .hall{margin-top: 13px;}
    .hall_img{ background:#424242; text-align: center; padding: 10px 0; margin-top:5px;}
    .hall_img a{ width:171px; height:142px; display:block; margin-left:10px; overflow:hidden;}
    .hall_img a img{transition: all .5s ease;}
    .hall_img a:hover img{transform: scale(1.1);}
    .hall_wz{background:#424242; text-align: center; margin-top: 5px; padding: 5px;}
    .hall_wz h2{ color: #d9bd7b; font-size: 12px;}

    .hall_img a{display: none;}.hall_img{position: relative;}.hall_jtl{background:url(https://img.ssl.q1.com/lw/images/20170215_main/jt.png?=1) 0 0;width: 17px;height: 31px;position: absolute;left: -20px;top:60px;cursor: pointer;}.hall_jtr{background:url(https://img.ssl.q1.com/lw/images/20170215_main/jt.png?=1) -17px 0;width: 17px;height: 31px;position: absolute;right: -20px;top: 60px;cursor: pointer;}
    .hall_img a.active{display: block}
</style>
