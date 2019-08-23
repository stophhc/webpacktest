<template>
    <div>
      <commonTop></commonTop>
        <appTop></appTop>
        <div class="main">
            <appLeft></appLeft>
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

                <div class="ziliao loop">
                    <div class="p2 ziliao_1">
                        <h2>{{dataCenter.noviceTitle}}</h2>
                        <div class="p2N"><a :key="items.id" v-for="items in novice" :href="items.itemsHref" target="_blank">{{items.itemsName}}</a></div>
                        <a :href="dataCenter.moreHref" class="more" target="_blank">{{dataCenter.more}}</a>
                    </div>
                    <div class="p2 ziliao_2">
                        <h2>{{dataCenter.growTitle}}</h2>
                        <div class="p2N"><a :key="items.id" v-for="items in grow" :href="items.itemsHref" target="_blank">{{items.itemsName}}</a></div>
                        <a :href="dataCenter.moreHref" class="more" target="_blank">{{dataCenter.more}}</a>
                    </div>
                    <div class="p2 ziliao_3">
                        <h2>{{dataCenter.copyTitle}}</h2>
                        <div class="p2N"><a :key="items.id" v-for="items in copy" :href="items.itemsHref" target="_blank">{{items.itemsName}}</a></div>
                        <a :href="dataCenter.moreHref" class="more" target="_blank">{{dataCenter.more}}</a>
                    </div>
                    <div class="p2 ziliao_2">
                        <h2>{{dataCenter.characteristicTitle}}</h2>
                        <div class="p2N"><a :key="items.id" v-for="items in characteristic" :href="items.itemsHref" target="_blank">{{items.itemsName}}</a></div>
                        <a :href="dataCenter.moreHref" class="more" target="_blank">{{dataCenter.more}}</a>
                    </div>
                </div>

                <!--精彩活动-->
                <div class="marvellous loop">
                    <div class="marvellous_tit"><!--<a href="/zt/index.html" target="_blank">更多<span></span></a>-->
                        <h2><i class="marvellous_time"></i>精彩活动</h2>
                    </div>
                    <div class="marvellousN">
                        <div class="p3">
                            <div class="p3N">
                                <a :key="item.id" v-for="item in activity" :class="item.itemsClass" :href="item.itemsHref" target="_blank"><img :src="item.itemsImg" width="323" height="191"></a>
                            </div>
                        </div>
                        <div class="p3_tit">
                            <span :key="index.id" v-for="(item,index) in activityTitle" :class="{'p3_focus':index==0}">{{item}}</span>
                        </div>
                    </div>
                </div>

                <!--职业-->
                <div class="zhiye loop">
                    <div class="zhiye_tit">
                        <ul>
                            <li :key="index.id" :num="index" v-for="(item, index) in professionName">{{item}}</li>
                        </ul>
                        <div class="zy_bor"></div>
                    </div>
                    <!--飞 影-->
                    <div class="zhiyeN" :key="item.id" v-for="item in profession">
                        <h2>{{item.professionTitle}}</h2>
                        <h3>{{item.professionAuto}}</h3>
                        <p>{{item.professionWeapon}} <br/>
                            {{item.professionSkilled}}<br/>
                            {{item.professionUnique}}</p>
                        <div>上手难度：<span></span><span></span><span></span><i></i><i></i></div>
                    </div>

                    <div class="zy_gif"><img src="https://img1.ssl.q1.com/lw/images/20170215_main/zy_0.gif?v=2" width="133" height="92"></div>
                    <div class="zy_rw"><img src="https://img1.ssl.q1.com/lw/images/20170215_main/zhiye_0.png?v=1"></div>
                </div>

                <!--视频-->
                <a class="main_fd video loop" href="/sjsy/video.html" target="_blank"> <img src="https://img.ssl.q1.com/lw/images/20170215_main/main_video.jpg?v=1">
                    <div class="video_bj"></div>
                    <div class="main_ad video_wz"></div>
                </a>

                <!--玩家展示-->
                <div class="wjzs loop">
                    <h2><i></i>玩家展示</h2>
                    <iframe src="http://lw2.q1.com/wjzs.html" name="ifram" width="557" marginwidth="0" height="238" marginheight="0" scrolling="No" frameborder="No" id="ifram" allowtransparency="allowtransparency" border="0"></iframe>
                </div>

                <!--壁纸-->
                <a class="main_fd bizhi loop" href="/sjsy/bizi.html" target="_blank"> <img src="https://img.ssl.q1.com/lw/images/20170215_main/main_bizhi.jpg?v=1">
                    <div class="video_bj"></div>
                    <div class="main_ad bizhi_wz"></div>
                </a>

                <!--玩家专区-->
                <div class="wjzq loop">
                    <div class="wjzq_list wjzq_tab1">
                        <div class="wjzq_left" num=0 ><i>最近更新</i><span class="wjzq_icon1"></span></div>
                        <div class="wjzq_right">
                            <a href="http://ka.sina.com.cn/index/game/8707" target="_blank" class="wjzq_gg cs3_1"><img src="https://img.ssl.q1.com/lw/images/20170215_main/main_gg1.jpg?v=1"></a><a href="http://bbs.lw.q1.com/forum.php?mod=viewthread&tid=68024&extra=page%3D1" target="_blank" class="cs3_1"><img src="https://img.ssl.q1.com/lw/images/20170215_main/main_gg2.jpg?v=1"></a>
                            <ul>
                                <li><span class=date>[07/31]</span><span class=typename>【<a href='#' target=_blank>公告</a>】</span><a href='#' target='_blank'><b><font color=red>8月2日14时1组新服火爆开启..</font></b></a>&nbsp;<span></span> </li>
                                <li><span class=date>[07/30]</span><span class=typename>【<a href='#' target=_blank>维护</a>】</span><a href='#' target='_blank'>7月31日7:00~9:00更新维护公..</a>&nbsp;<span></span> </li>
                            </ul>
                            <div class="wjzq_btn"><a href="/JzNewsFile/T35/P1.html" target="_blank">查看更多</a></div>
                        </div>
                    </div>
                    <div class="wjzq_list wjzq_tab2">
                        <div class="wjzq_left" num=1 ><i>最近更新</i><span class="wjzq_icon2"></span></div>
                        <div class="wjzq_right">
                            <a href="http://ka.sina.com.cn/index/game/8707" target="_blank" class="wjzq_gg cs3_1"><img src="https://img.ssl.q1.com/lw/images/20170215_main/main_gg1.jpg?v=1"></a><a href="http://bbs.lw.q1.com/forum.php?mod=viewthread&tid=68024&extra=page%3D1" target="_blank" class="cs3_1"><img src="https://img.ssl.q1.com/lw/images/20170215_main/main_gg2.jpg?v=1"></a>
                            <ul>
                                <li><span class=date>[07/31]</span><span class=typename>【<a href='#' target=_blank>公告</a>】</span><a href='#' target='_blank'><b><font color=red>8月2日14时1组新服火爆开启..</font></b></a>&nbsp;<span></span> </li>
                                <li><span class=date>[07/30]</span><span class=typename>【<a href='#' target=_blank>维护</a>】</span><a href='#' target='_blank'>7月31日7:00~9:00更新维护公..</a>&nbsp;<span></span> </li>
                            </ul>
                            <div class="wjzq_btn"><a href="/JzNewsFile/T35/P1.html" target="_blank">查看更多</a></div>
                        </div>
                    </div>
                    <div class="wjzq_list wjzq_tab3">
                        <div class="wjzq_left" num=2 ><i>最近更新</i><span class="wjzq_icon3"></span></div>
                        <div class="wjzq_right">
                            <a href="http://ka.sina.com.cn/index/game/8707" target="_blank" class="wjzq_gg cs3_1"><img src="https://img.ssl.q1.com/lw/images/20170215_main/main_gg1.jpg?v=1"></a><a href="http://bbs.lw.q1.com/forum.php?mod=viewthread&tid=68024&extra=page%3D1" target="_blank" class="cs3_1"><img src="https://img.ssl.q1.com/lw/images/20170215_main/main_gg2.jpg?v=1"></a>
                            <ul>
                                <li><span class=date>[07/31]</span><span class=typename>【<a href='#' target=_blank>公告</a>】</span><a href='#' target='_blank'><b><font color=red>8月2日14时1组新服火爆开启..</font></b></a>&nbsp;<span></span> </li>
                                <li><span class=date>[07/30]</span><span class=typename>【<a href='#' target=_blank>维护</a>】</span><a href='#' target='_blank'>7月31日7:00~9:00更新维护公..</a>&nbsp;<span></span> </li>
                            </ul>
                            <div class="wjzq_btn"><a href="/JzNewsFile/T35/P1.html" target="_blank">查看更多</a></div>
                        </div>
                    </div>
                    <div class="wjzq_list wjzq_tab4">
                        <div class="wjzq_left bg_fff" num=3 ><i>最近更新</i><span class="wjzq_icon4"></span></div>
                        <div class="wjzq_right">
                            <a href="http://ka.sina.com.cn/index/game/8707" target="_blank" class="wjzq_gg cs3_1"><img src="https://img.ssl.q1.com/lw/images/20170215_main/main_gg1.jpg?v=1"></a><a href="http://bbs.lw.q1.com/forum.php?mod=viewthread&tid=68024&extra=page%3D1" target="_blank" class="cs3_1"><img src="https://img.ssl.q1.com/lw/images/20170215_main/main_gg2.jpg?v=1"></a>
                            <ul>
                                <li><span class=date>[07/31]</span><span class=typename>【<a href='#' target=_blank>公告</a>】</span><a href='#' target='_blank'><b><font color=red>8月2日14时1组新服火爆开启..</font></b></a>&nbsp;<span></span> </li>
                                <li><span class=date>[07/30]</span><span class=typename>【<a href='#' target=_blank>维护</a>】</span><a href='#' target='_blank'>7月31日7:00~9:00更新维护公..</a>&nbsp;<span></span> </li>
                            </ul>
                            <div class="wjzq_btn"><a href="/JzNewsFile/T35/P1.html" target="_blank">查看更多</a></div>
                        </div>
                    </div>

                </div>

                <!--媒体-->
                <div class="media loop">
                    <h2><i></i>媒体中心</h2>
                    <div class="mediaN">
                        <a :key="item.id" v-for="item in media" :href="item.itemsHref" target="_blank"><img :src="item.itemsImg" width="143" height="102"></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="zz_video"></div>
        <div class="tc_video">
            <div class="video_close"></div>
            <div class="tc_videoN"></div>
        </div>
        <copy></copy>
    </div>

</template>

<script>
import Focus from '@/components/focus'
export default {
  components: {
    'appFocus': Focus
  },
  data () {
    return {
      dataCenter: {
        more: '更多>',
        moreHref: 'http://lw2.q1.com/jzarticle/ziliao.html',
        noviceTitle: '新手入门',
        growTitle: '快速成长',
        copyTitle: '副本玩法',
        characteristicTitle: '特色PK'
      },
      activity: [
        {itemsHref: 'http://lw2.q1.com/gh/index.html', itemsImg: 'https://img.ssl.q1.com/lw/images/20170215_main/marvellous_3.jpg?v=1', itemsClass: 'p3_list'},
        {itemsHref: 'http://lw2.q1.com/zt/qjcj.html', itemsImg: 'https://img.ssl.q1.com/lw/images/20170215_main/marvellous_5.jpg?v=1', itemsClass: 'p3_list'},
        {itemsHref: 'http://lw2.q1.com/tg/index.html', itemsImg: 'https://img.ssl.q1.com/lw/images/20170215_main/marvellous_2.jpg?v=1', itemsClass: 'p3_list'}
      ],
      activityTitle: ['公会入驻平台', '带狗新职业', '邀请好友赢大奖'],
      novice: [
        {itemsHref: 'http://passport.q1.com/zhuce.html', itemsName: '账号注册'},
        {itemsHref: '/download/index.html', itemsName: '下载安装'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A41/225.html', itemsName: '游戏操作'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A41/226.html', itemsName: '游戏界面'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A40/227.html', itemsName: '背景资料'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A55/324.html', itemsName: '主线任务'},
        {itemsHref: 'http://lw2.q1.com/JzNewsFile/42/31.html', itemsName: '概率公示'},
        {itemsHref: 'http://yz.q1.com/baohu/index.html', itemsName: '家长监护'}
      ],
      grow: [
        {itemsHref: 'http://lw2.q1.com/JzArticle/A42/249.html', itemsName: 'VIP系统'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A42/250.html', itemsName: '称号系统'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A41/251.html', itemsName: '读书系统'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A41/253.html', itemsName: '回购系统'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A40/255.html', itemsName: '交易系统'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A55/309.html', itemsName: '法宝系统'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A58/332.html', itemsName: '经脉系统'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A58/334.html', itemsName: '灵兽系统'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A58/373.html', itemsName: '元神系统'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A74/2017.html', itemsName: '家园指引'}
      ],
      copy: [
        {itemsHref: 'http://lw2.q1.com/JzArticle/A50/261.html', itemsName: '激战长白山'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A50/268.html', itemsName: '通天塔'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A50/267.html', itemsName: '太乙幽魂阵'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A50/312.html', itemsName: '瓦岗寨'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A50/264.html', itemsName: '龙石保卫战'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A50/313.html', itemsName: '侠客行'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A50/269.html', itemsName: '突厥入侵'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A50/383.html', itemsName: '魔神谷'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A50/314.html', itemsName: '血战江都城'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A50/365.html', itemsName: '卧佛寺'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A50/361.html', itemsName: '梵刹地宫'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A50/386.html', itemsName: '大闹天宫'}
      ],
      characteristic: [
        {itemsHref: 'http://lw2.q1.com/JzArticle/A72/387.html', itemsName: '西行争霸'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A72/387.html', itemsName: '长安演武'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A74/289.html', itemsName: '天地劫'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A75/304.html', itemsName: '龙柱争夺战'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A75/305.html', itemsName: '乱武大会'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A50/263.html', itemsName: '龙虎斗'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A76/357.html', itemsName: '天下第一武道会'},
        {itemsHref: 'http://lw2.q1.com/JzArticle/A74/281.html', itemsName: '帮战联赛'}
      ],
      professionName: ['飞 影', '枪炮师', '真 武', '玄 宗', '修 罗', '灵 心', '天 羽', '龙 枪', '唤 灵'],
      profession: [
        {
          professionTitle: '飞影',
          professionAuto: '十步杀一人 千里不留行',
          professionWeapon: '器：双刃',
          professionSkilled: '擅长：近战，控制，生存',
          professionUnique: '绝招：穿云破、万象引、血战殇'
        }, {
          professionTitle: '枪炮师',
          professionAuto: '酥指一扣  江湖从此改变',
          professionWeapon: '武器：枪',
          professionSkilled: '擅长：远程 输出 控制',
          professionUnique: '绝招：毁灭轰炸、震荡炮击'
        }, {
          professionTitle: '真 武',
          professionAuto: '我自霸刀向天笑   破军千里论英雄',
          professionWeapon: '武器：刀',
          professionSkilled: '擅长：近战 防御 生存',
          professionUnique: '绝招：碎虚空、震乾坤、弑鬼神'
        }, {
          professionTitle: '玄 宗',
          professionAuto: '生当豪杰   死亦鬼雄',
          professionWeapon: '武器：杖',
          professionSkilled: '擅长：远程 伤害 法术',
          professionUnique: '绝招：灼心炎、炎星陨、燃魂劫'
        }, {
          professionTitle: '修 罗',
          professionAuto: '行阴阳之术  盛极朔月时',
          professionWeapon: '武器：轮',
          professionSkilled: '擅长：远程 控制 巫术',
          professionUnique: ' 绝招：惊魂、紫狱、天魔灭世'
        }, {
          professionTitle: '灵 心',
          professionAuto: '清风玉露一相逢  便胜却万物回春',
          professionWeapon: '武器：扇',
          professionSkilled: '擅长：远程 辅助 治疗',
          professionUnique: '绝招：回梦、天威、沧海凝光'
        }, {
          professionTitle: '天 羽',
          professionAuto: '弓开如满月  箭去似流星',
          professionWeapon: '武器：弓',
          professionSkilled: '擅长：远程 物理 爆发',
          professionUnique: '绝招：星陨、邪月、箭雨潇潇'
        }, {
          professionTitle: '龙 枪',
          professionAuto: '游龙一掷乾坤破 孤枪九连天下绝',
          professionWeapon: '武器：长枪',
          professionSkilled: '擅长：近战，控制，生存',
          professionUnique: '绝招：穿云破、万象引、血战殇'
        }, {
          professionTitle: '唤 灵',
          professionAuto: '御灵浮生济沧海  唤影凝形渡生灵',
          professionWeapon: '武器：法杖',
          professionSkilled: '擅长：召唤，法师，辅助',
          professionUnique: '绝招：玄光舞、唤神隐、幻蝶舞'
        }
      ],
      media: [
        {itemsHref: 'http://newgame.duowan.com/ku/1998.html', itemsImg: 'https://img.ssl.q1.com/lw/images/20170215_main/media_yy.jpg?v=1'},
        {itemsHref: 'https://www.gamersky.com/', itemsImg: 'https://img.ssl.q1.com/lw/images/20170215_main/media_ymxk.jpg?v=1'},
        {itemsHref: 'http://longwu.17173.com/', itemsImg: 'https://img.ssl.q1.com/lw/images/20170215_main/media_17173.jpg?v=1'},
        {itemsHref: 'http://lw.yzz.cn/', itemsImg: 'https://img.ssl.q1.com/lw/images/20170215_main/media_yzz.jpg?v=1'}
      ]

    }
  },
  mounted () {
    // 新闻
    $('.new .title li').each(function (jie) {
      $(this).mousemove(function () {
        $('li.tit_hover').removeClass('tit_hover')
        $(this).addClass('tit_hover')
        $('.hui').removeClass('hui')
        $('.new .p1_list').eq(jie).addClass('hui')
      })
    })

    $('.zhiye_tit li').each(function (index) {
      $(this).click(function () {
        var oNum = $(this).attr('num')
        $('.zhiyeN ,.zy_rw').stop(true, true)
        $('.zhiye_tit li').removeClass('zhiye_focus')
        $(this).addClass('zhiye_focus')
        $('.zy_bor').animate({left: $('.zy_bor').width() * index}, 300)
        $('.zhiyeN').animate({left: '-510px', opacity: '0'}, 300, function () {
          $('.zhiyeN').eq(index).animate({left: '24px', opacity: '1'}, 300)
        })
        $('.zy_rw').animate({right: '-278px', opacity: '0'}, 300)
        setTimeout(function () { $('.zy_rw').animate({right: '0', opacity: '1'}, 300).find('img').attr('src', 'https://img1.ssl.q1.com/lw/images/20170215_main/zhiye_' + oNum + '.png?v=3') }, 300)
        $('.zy_gif').animate({opacity: '0'}, 300)
        setTimeout(function () { $('.zy_gif').animate({opacity: '1'}, 300).find('img').attr('src', 'https://img1.ssl.q1.com/lw/images/20170215_main/zy_' + oNum + '.gif?v=2') }, 500)
      })
    })

    $('.wjzq_left').click(function () {
      if ($(this).attr('now') !== 3) {
        var temp = parseInt($(this).attr('num'))
        $('.wjzq_left').removeClass('bg_fff').eq(temp).addClass('bg_fff')
        if (temp > $('.wjzq_left[now=1]').attr('num')) {
          for (var i = 0; i < temp + 1; i++) {
            $('.wjzq_list').eq(i).animate({left: i * 70 + 'px'}, 300)
          }
        } else {
          for (var k = temp; k < $('.wjzq_left').length; k++) {
            $('.wjzq_list').eq(k + 1).animate({left: 400 + k * 70 + 'px'}, 300)
          }
        }
        setTimeout(function () {
          $('.wjzq_left').attr('now', 0).eq(temp).attr('now', 1)
        }, 310)
      }
    })

    this.news('.p3_tit span', '.p3N', '.p3N a', '', 'p3_focus')// 精彩活动
    this.bizhi('.video')// 视频
    this.bizhi('.bizhi')// 壁纸
  },
  methods: {
    // 公用选项卡
    news (name1, name2, name3, name4, name5) {
      $(name1).each(function (index) {
        $(name2).css('width', $(name3).width() * (index + 1))
        $(this).click(function () {
          $(name1, name2).stop(false, true)
          $(name1).removeClass(name5)
          $(this).addClass(name5)
          $(name4).animate({left: $(name4).width() * index}, 200)
          $(name2).animate({left: -$(name3).width() * index})
        })
      })
    },
    // 壁纸
    bizhi (name) {
      $(name).mouseenter(function () {
        $('.video_bj ,.main_ad').stop(true, true)
        $(name).find('.video_bj').animate({width: '323px'})
        $(name).find('.main_ad').animate({left: '130px'})
      })
      $(name).mouseleave(function () {
        $('.video_bj ,.main_ad').stop(true, true)
        $(name).find('.video_bj').animate({width: '130px'})
        $(name).find('.main_ad').animate({left: '24px'})
      })
    }

  }
}

</script>

<style scoped>
    .p2 h2 ,.marvellous_tit h2 i ,.marvellous_tit a span ,.zhiye_tit li span ,.zhiyeN span ,.zhiyeN i ,.main_ad ,.wjzq_left span ,.wjzs h2 i ,.media h2 i ,.new .title a{background:url(https://img1.ssl.q1.com/lw/images/20170215_main/main.png?v=2) no-repeat;}

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

    .ziliao{height: 265px;width:610px;float: left; margin-top: 15px;overflow: hidden;;zoom:1;}
    .p2{width: 304px;height: 116px;background:#fff;padding-top: 15px; line-height: 24px; position: relative;float: left;}
    .p2 h2{ color:#828b9a; width: 194px; text-align: center;margin:0 0 5px 42px;  background-position: 0 1px; font-size:18px;}
    .p2 a{color:#8f8f8f; font-size: 12px;display: inline-block;}
    .p2 .more{ position: absolute; color: #8f8f8f; height:18px; border: 1px solid #c7c7c7; display:inline-block; line-height: 18px; padding: 0 5px; top:6px; right:6px; font-size: 12px; }
    .p2 .more:hover{color: #da3420;border: 1px solid #da3420; }
    .ziliao_1{ border-right: 1px solid #e9e9e9; border-bottom: 1px solid #e9e9e9; }
    .ziliao_1 .p2N{padding: 0 13px; line-height: 30px; }
    .ziliao_1 a{margin:0 9px;}
    .ziliao_2{width: 305px;border-bottom: 1px solid #e9e9e9;}
    .ziliao_2 .p2N{padding: 0 13px;}
    .ziliao_2 a{margin:0 10px;}
    .ziliao_3{ border-right: 1px solid #e9e9e9;}
    .ziliao_3 .p2N{padding: 0 0 0 14px; }
    .ziliao_3 a{margin:0 10px;}

    /*精彩活动*/
    .marvellous{width: 323px; height: 265px;background: #fff; float: right;margin-top: 15px;}
    .marvellous_tit{padding: 8px 16px 0 16px;}
    .marvellous_tit h2{ color:#828b9a; line-height: 25px; font-size:18px;}
    .marvellous_tit h2 i{display: inline-block;width: 25px;height: 20px; background-position: -202px 0; vertical-align: middle; margin-right: 9px; font-size:12px; padding-top:5px;text-align:center;}
    .marvellous_tit a{ float: right;color:#828b9a;}
    .marvellous_tit a span{display: inline-block;width: 14px;height: 14px; background-position: -232px 0; vertical-align: middle; margin-left: 3px;}
    .marvellousN{margin-top: 9px;}
    .p3{ width:323px; height:191px; position:relative; overflow:hidden;}
    .p3N{ position:absolute; top:0; left:0;}
    .p3 a{ display:inline-block;width:323px; height:191px;}
    .p3_tit{background:#1e1c2d;}
    .p3_tit span{ display:inline-block; width:106px; height:32px; background:#1e1c2d; cursor:pointer; border-right:1px solid #4c466c; text-align:center; line-height:32px; font-family:"微软雅黑"; font-size:14px; color:#b2b2b2;}
    .p3_tit span.borNone{border:none}
    .p3_tit span.p3_focus{ background:#cfae69; color:#191723}

    /*职业*/
    .zhiye{ width:580px;  background: #fff; height: 321px;  float: left; padding: 0 15px;margin-top: 15px; position:relative; overflow: hidden;}
    .zhiye_tit{position: relative;}
    .zy_bor{background: #7b7cd8;width: 64px;height: 2px;left: 0;top:34px; position: absolute;}
    .zhiye_tit ul{border-bottom: 1px solid #b4b4b4; height: 35px;}
    .zhiye_tit li{width: 64px; float: left; line-height: 35px; font-size: 16px; color: #828b9a; cursor: pointer;text-align: center;}
    .zhiye_tit li:hover ,.zhiye_tit li.zhiye_focus{ color: #4f4f8b; }
    .zhiye_tit li span{display:inline-block;width: 22px;height: 22px;margin-right: 5px;vertical-align: middle;}
    .zhiye_tit li span.zy_list1{ background-position: 0 -25px; }
    .zhiye_tit li span.zy_list2{ background-position: -23px -25px; }
    .zhiye_tit li span.zy_list3{ background-position: -46px -25px; }
    .zhiye_tit li span.zy_list4{ background-position: -69px -25px; }
    .zhiye_tit li span.zy_list5{ background-position: -92px -25px; }
    .zhiye_tit li span.zy_list6{ background-position: -116px -25px; }
    .zhiye_tit li span.zy_list7{ background-position: -138px -25px; }
    .zhiye_tit li:hover span.zy_list1 ,.zhiye_tit li.zhiye_focus span.zy_list1{ background-position: 0 -48px; }
    .zhiye_tit li:hover span.zy_list2 ,.zhiye_tit li.zhiye_focus span.zy_list2{ background-position: -23px -48px; }
    .zhiye_tit li:hover span.zy_list3 ,.zhiye_tit li.zhiye_focus span.zy_list3{ background-position: -46px -48px; }
    .zhiye_tit li:hover span.zy_list4 ,.zhiye_tit li.zhiye_focus span.zy_list4{ background-position: -69px -48px; }
    .zhiye_tit li:hover span.zy_list5 ,.zhiye_tit li.zhiye_focus span.zy_list5{ background-position: -92px -48px; }
    .zhiye_tit li:hover span.zy_list6 ,.zhiye_tit li.zhiye_focus span.zy_list6{ background-position: -116px -48px; }
    .zhiye_tit li:hover span.zy_list7 ,.zhiye_tit li.zhiye_focus span.zy_list7{ background-position: -138px -48px; }
    .zhiyeN{ position: absolute; left: -500px; top:72px;}
    .zhiyeN h2{ font-size: 54px; color: #4f4f8b; line-height: 54px;padding-bottom:14px;}
    .zhiyeN h3{ color: #4a4c54; font-size: 18px; font-weight: normal; }
    .zhiyeN p{ padding: 25px 0 5px 0; line-height:20px;}
    .zhiyeN span{ display: inline-block;width: 18px;height: 18px; background-position: -161px -25px; margin-left: 1px; vertical-align: middle;}
    .zhiyeN i{display: inline-block;width: 18px;height: 18px;background-position: -161px -48px;vertical-align: middle;}
    .zy_rw{position: absolute; right: 0; top:41px;}
    .zy_gif{position: absolute; left: 201px; top:188px; z-index:1;opacity:1}
    .zhiyeN a{ color:#8e8fc3; padding:0 7px 0 10px; border:1px solid #8e8fc3; line-height:20px; height:22px; display:inline-block; margin-top:10px;}
    .zhiyeN a:hover{ border:1px solid #de0000}

    /*视频*/
    .main_fd{width: 323px;height:321px;float: right;margin-top: 15px;display:block; overflow: hidden; position: relative;}
    .main_fd img{transition: all .5s ease;}
    .main_fd:hover img { transform: scale(1.1); }
    .main_ad{position: absolute; top:98px; left: 33px;}
    .video_wz{width: 63px;height:123px;background-position: 0 -74px; }
    .video_bj{width: 130px;height: 321px;background:#000; position: absolute;top:0;left: 0; filter:alpha(opacity=70);opacity: 0.7;}

    /*壁纸*/
    .bizhi_wz{width: 72px;height:131px;background-position: -72px -74px;}

    /*玩家展示*/
    .wjzs{width:580px;height: 307px;float: left;margin-top: 15px; background:#fff;padding:14px 15px 0 15px;}
    .wjzs h2{ font-size:18px; color:#828b9a; font-family:"微软雅黑";  border-bottom:1px solid #b7b7b7; padding-bottom:8px; margin-bottom:15px;}
    .wjzs h2 i{ width:37px; height:24px; display:inline-block; background-position:-187px -48px; vertical-align:middle; margin:0 8px 0 12px;}

    /*玩家专区*/
    .wjzq{width: 610px;height: 321px;background: #fff;float: left;margin-top:15px; position: relative; overflow: hidden;}
    .wjzq_list{position: absolute;top:0;background: #fff}
    .wjzq_tab2{left:70px;}
    .wjzq_tab3{left:140px;}
    .wjzq_tab4{left:210px;}
    .wjzq_left{width: 69px;float: left;border-right: 1px solid #e9e9e9; height:321px;background: #f6f6f6; cursor: pointer;;}
    .wjzq_left i{font-size: 22px; color: #737984; font-family: "微软雅黑"; display: block;width: 30px;text-align: center;margin:22px auto 8px auto;}
    .wjzq_left span{ display: block;margin: 0 auto;}
    .wjzq_left span.wjzq_icon1{width: 52px;height: 172px; background-position: 0 -217px;}
    .wjzq_left span.wjzq_icon2{width: 41px;height: 177px; background-position: -57px -217px;}
    .wjzq_left span.wjzq_icon3{width: 36px;height: 171px; background-position: -104px -217px;}
    .wjzq_left span.wjzq_icon4{width: 47px;height: 171px; background-position: -145px -217px;}
    .wjzq_right{width: 284px;float: left;margin:18px 0 0 20px;display: inline;}
    .wjzq_right ul{ height:143px; overflow:hidden;}
    .wjzq_btn{ text-align:center; margin-top:10px;}
    .wjzq_btn a{ color:#828b9a;background:url(https://img.ssl.q1.com/lw/images/20170215_main/wjzx_icon.gif?v=1) no-repeat right 4px; padding-right:13px;}
    .wjzq_gg{margin-right: 24px;}
    .wjzq_right .typename{display: none;}
    .wjzq li{ line-height: 30px; }
    .wjzq_right a.cs3_1{ width:129px; height:99px; overflow:hidden;display: inline-block;}
    .wjzq_right .cs3_1 img{transition: all .5s ease;}
    .wjzq_right .cs3_1:hover img{transform: scale(1.1);}
    .bg_fff,.wjzq_left:hover{background:#fff;}

    /*媒体专区*/
    .media{width: 324px;height: 321px;background: #fff;float: right;margin-top: 15px;}
    .media h2{font-size: 18px;color: #828b9a;font-family: "微软雅黑";border-bottom: 1px solid #b7b7b7;padding:14px 0  8px 11px;margin:0 10px  15px 10px;}
    .media h2 i{ background-position: -186px -81px; width: 39px; height:32px; display: inline-block; vertical-align: middle; margin-right: 8px;}
    .mediaN{ margin:20px 0 0 13px; }
    .media  a{ border: 1px solid #e0e0e0; display: inline-block; margin:0 7px 7px 0; }
</style>
