<template>
    <div>
      <div class="khd_top">
        <div class="tit3"><strong>完整客户端下载</strong></div>
        <div class="khd_topN">
          客户端版本：1.0.812.1254<br/>
          文件大小： 1.71GB <br/>
          更新日期： 2019-8-14<br/>
          MD5码：C6DB8D52EC34E44FD36A8506F92271E0
        </div>
        <a class="khd_a" href="javascript:;" onClick="addWebClick('下载_龙武_完整端_官网');GoDownLoad('index_down');">完整客户端下载</a>
      </div>

      <div class="down_btom">
        <div class="tit3"><strong>媒体分流</strong>排名不分先后</div>
        <ul>
          <li :key="item.id" v-for="item in download"><a :href="item.itemsHref" rel="nofollow" target="_blank"><b>{{item.itemsB}}</b>{{item.itemsText}}</a></li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Download',
  data () {
    return {
      download: [
        {itemsHref: 'http://download.17173.com/1000061/10/63887/', itemsB: '17173', itemsText: '完整版客户端'},
        {itemsHref: 'http://dl.pcgames.com.cn/download/68646.html', itemsB: '太平洋游戏网', itemsText: '完整版客户端'},
        {itemsHref: 'http://down.52pk.com/xiazai/13781.shtml', itemsB: '52PK', itemsText: '完整版客户端'},
        {itemsHref: 'http://dl.yzz.cn/client/201304/616667.shtml', itemsB: '叶子猪', itemsText: '完整版客户端'}
      ]
    }
  }
}
</script>

<style scoped>
  .tit3{ margin-top:35px;}
  .tit3 strong{ display:inline-block; font-size:14px;border-left:2px solid #cfae69; padding-left:8px; line-height:16px;}
  .tit3 span{ color:#7c78bd; padding-left:20px;}
  .cjwt_list{ border-bottom:1px dotted #adacc6; padding-bottom:35px;}
  .cjwt_listN{ padding-left:10px; line-height:24px; margin-top:10px;}
  .tit3 i{ font-style:normal; display:block;font-size:14px; font-weight:bold; padding-left:10px; margin-top:3px;}

  .mend_top{ line-height:24px; margin-top:35px;}
  .mend_top a{color:#282b4a;}
  .mend_top strong{ font-size:14px;}
  .down_table{ background:#e1effb;border-collapse:collapse;}
  .down_table td{ border-bottom:#f6f6f9 1px solid;height:38px; line-height:38px; text-align:center; background:#e3e3eb;}
  .down_table td a{ color:#45427e}
  .down_table{ margin-bottom:0;}
  .cjwt .title{ background:#bdbdcf url(https://img.ssl.q1.com/lw/images/20151103_list/down_icon.gif?v=1) no-repeat 17px 10px; height:33px; margin-bottom:1px;font-weight:bold; padding-left:40px; line-height:33px; margin-top:10px;}
  .hhc1{height:200px; overflow:hidden; position:relative; padding-bottom:30px;}
  .unfold{ height:30px; line-height:30px; background:#e3e3eb; text-align:center; cursor:pointer; position:absolute; left:0; bottom:0; width:100%; font-weight:bold; color:#45427e;}

  .khd_top{ border-bottom:1px  dotted #adacc6; padding-bottom:40px;}
  .khd_topN{ margin:20px 0 20px 10px; line-height:24px;}
  .khd_a{ background-position:0 -92px; display:block; width:356px; height:60px;margin:0 auto; font-size:16px; color:#fff; line-height:60px; text-align:center; font-weight:bold;}
  .khd_a:hover{background-position:0 -152px; color:#fff;}
  .down_btom{ border-top:1px dotted #c1c0d0; padding-top:30px;}
  .down_btom strong{ padding-right:5px;}
  .down_btom ul{ margin-top:20px; overflow:hidden; zoom:1; width:800px;}
  .down_btom li{width:303px; height:82px; float:left; margin:0 92px 42px 0;}
  .down_btom li a{width:163px; height:54px; display:block; color:#3d4d68; padding:28px 0 0 140px; line-height:16px; background-position:-356px -92px;}
  .down_btom li a b{display:block; font-size:14px;}
  .down_btom li a:hover{ color:#fff;background-position:-356px -174px; text-decoration:none;}
</style>
