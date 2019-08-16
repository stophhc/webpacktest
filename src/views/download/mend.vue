<template>
  <div>
    <div class="mend_top">
      <strong>补丁下载说明</strong>
      <p>以下部分下载内容仅供给在游戏升级补丁无法自动更新的部分玩家使用（<a href="http://lw2.q1.com/JzNewsFile/21/17.html">点我查看手动更新补丁教程</a>），请自动更新出错的玩家仔细阅读，如果您的更新无问题则无需使用以下补丁。</p>
    </div>
    <div class="tit3"><strong>客户端下载</strong></div>

    <div class="hhc1">
      <div class="title">完整客户端补丁下载</div>
      <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" class="down_table">
        <tr>
          <td width="29%" align="center">版本号</td>
          <td width="19%" align="center">大小</td>
          <td width="22%" align="center">更新日期</td>
          <td width="30%" align="center">下载地址</td>
        </tr>
        <tr :key="time.id" v-for="time in fullMend">
          <td align="center">{{time.versions}}</td>
          <td align="center">{{time.size}}</td>
          <td align="center">{{time.date}}</td>
          <td align="center"><a :href="time.downloadHref">HTTP下载</a></td>
        </tr>
      </table>
      <div class="unfold">查看更多</div>
    </div>

    <div class="hhc1">
      <div class="title" style="margin-top:20px;">迷你客户端补丁下载</div>
      <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" class="down_table">
        <tr>
          <td width="29%" align="center">版本号</td>
          <td width="19%" align="center">大小</td>
          <td width="22%" align="center">更新日期</td>
          <td width="30%" align="center">下载地址</td>
        </tr>

        <tr :key="time.id" v-for="time in miniMend">
          <td align="center">{{time.versions}}</td>
          <td align="center">{{time.size}}</td>
          <td align="center">{{time.date}}</td>
          <td align="center"><a :href="time.downloadHref">HTTP下载</a></td>
        </tr>
      </table>
      <div class="unfold">查看更多</div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      fullMend: [{
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}
      ],
      miniMend: [{
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}, {
        versions: '13112001_13112701', size: '11.35MB', date: '2013-11-27', downloadHref: 'http://download.lw.szgla.cn/wei_update/patch13112601.exe'}
      ]
    }
  },
  mounted () {
    $('.unfold').each(function (ex) {
      $('.unfold').eq(ex).toggle(function () {
        $('.hhc1').eq(ex).css('height', 'auto')
        $('.unfold').eq(ex).html('点击收起')
      }, function () {
        $('.hhc1').eq(ex).css('height', '200px')
        $('.unfold').eq(ex).html('查看更多')
      })
    })
  }
}
</script>

<style scoped>
  .cjwt{ padding:35px 63px;}
  .cjwt .tit2 a{width:272px;}
  .tit2 a{  height:40px; line-height:40px; text-align:center; color:#fff; display:inline-block; background:#505372; margin-right:1px; font-size:14px;}
  .tit2 a:hover ,.tit2 a.tit2_focus{ background:#cfae69; color:#282b4a;}

  /*cjwt*/
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
