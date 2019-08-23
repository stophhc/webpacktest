<template>
<div>
  <div class="cjwt_list">
    <div class="tit3"><strong>问题1：获取最新版本信息失败!请检查网络及防火墙设置.</strong></div>
    <div class="cjwt_listN">
      解决方式<br/>
      第一步：关闭系统防火墙或者杀毒软件再开启游戏试试；<br/>
      第二步：重启路由器或猫，网线入户的玩家直接重启电脑后再开启游戏试试；<br/>
      第三步：请在电脑左下角-点击开始-设置-控制面板-网络连接-对着本地连接右<br/>
      键属性-常规下双击inter协议（tcp/ip)然后将下面的DNS 修改成8.8.8.8 再开启游戏试试。
    </div>
  </div>

  <div class="cjwt_list">
    <div class="tit3"><strong>问题2：打开资源包出错，客户端安装不完整，网吧用户发生该问题可尝试重启电脑或者找管理员</strong><i>进行更新。</i></div>
    <div class="cjwt_listN">
      解决方式<br/>
      第一步：网吧玩家找网管在网吧服务器上更新游戏后重启电脑，家庭玩家重启电脑再开启游戏试试；<br/>
      第二部：卸载游戏到官网下载点http://lw.q1.com/download/index.html下载安装最新客户端进行游戏。
    </div>
  </div>

  <div class="cjwt_list">
    <div class="tit3"><strong>问题3：安装资源文件失败！请确定文件是否被占用或重启后再更新！</strong></div>
    <div class="cjwt_listN">
      解决方式<br/>
      第一步：网吧玩家找网管在网吧服务器上更新游戏后重启电脑，家庭玩家用管理员权限开启游戏试试；<br/>
      第二部：卸载游戏到官网下载点http://lw.q1.com/download/index.html下载安装最新客户端进行游戏。
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Faq'
}
</script>
<style scoped>
  .tit3{ margin-top:35px;}
  .tit3 strong{ display:inline-block; font-size:14px;border-left:2px solid #cfae69; padding-left:8px; line-height:16px;}
  .tit3 span{ color:#7c78bd; padding-left:20px;}
  .cjwt_list{ border-bottom:1px dotted #adacc6; padding-bottom:35px;}
  .cjwt_listN{ padding-left:10px; line-height:24px; margin-top:10px;}
  .tit3 i{ font-style:normal; display:block;font-size:14px; font-weight:bold; padding-left:10px; margin-top:3px;}
</style>
