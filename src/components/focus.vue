<template>
    <div class="focus">
        <div class="tab">
            <div class="hhc">
                <li class="list1"><span class="tabIn">官方</span></li>
                <li class="list2"><span>媒体</span></li>
            </div>
            <div class="swf focus_hover" id="swf_shop">
                <div class="item">
                    <ul>
                    </ul>
                </div>
            </div>
            <div class="swf" id="swf_shop1">
                <div class="item1">
                    <ul>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import 'https://lw2.ssl.q1.com/news/js/cache/ablumn_16.js'
export default {
  name: 'focus'
}
</script>

<style scoped>

    .focus{width: 610px;height: 275px;float: left;}
    .tab{width:610px;height:275px; position:relative;}
    .swf{width:610px;height:275px;position:relative; display:none;}
    .swf img{position:absolute;left:0px;top:0px;width:610px;height:275px;}
    .item ,.item1{height:25px;position:absolute;bottom:0px;right:20px; z-index:1}
    .item ul li ,.item1 ul li{width:12px;height:12px;float:left;text-align:center;margin-left:5px;display:inline;line-height:25px;cursor:pointer;overflow:hidden; font-size:12px; color:#abd4ee; text-indent:-9999px; background:url(https://img.ssl.q1.com/lw/work/images/focus/dian.png) no-repeat;}
    .item ul li.hover ,.item1 ul li.hover{background:url(https://img.ssl.q1.com/lw/work/images/focus/dian_hover.png?v=1) no-repeat;}
    .hhc{ background:#45427e;width:23px; height:91px; position:absolute; right:0; top:0; z-index:121}
    .hhc li{height:48px; list-style:none; cursor:pointer; display:inline;  font-size:12px; color:#fff; text-align:center;}
    .hhc li span{ width:23px;display:block;margin:0; padding:0;}
    .hhc li.list1 span{ height:51px; padding-top:5px; text-align:center;line-height: 15px;}
    .hhc li.list2 span{height:38px; margin-top:-18px; padding-top:15px;text-align:center;line-height: 15px;}
    .hhc li.list1 span.tabIn{background:url(https://img.ssl.q1.com/lw/work/images/focus/tab3_hover.gif?v=1) no-repeat;}
    .hhc li.list2 span.tabIn{background:url(https://img.ssl.q1.com/lw/work/images/focus/tab2_hover.gif?v=1) no-repeat;}
    .focus_hover{ display:block;}
</style>
