<template>
<div>
  <mt-swipe :auto="4000">
    <mt-swipe-item>1</mt-swipe-item>
    <mt-swipe-item>2</mt-swipe-item>
    <mt-swipe-item>3</mt-swipe-item>
  </mt-swipe>

  <ul class="mui-table-view mui-grid-view mui-grid-9">
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="../News/NewList">
      <span class="mui-icon mui-icon-home"></span>
      <div class="mui-media-body">新闻资讯</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="../home/photoList">
      <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
      <div class="mui-media-body">图品分享</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
      <span class="mui-icon mui-icon-location"></span>
      <div class="mui-media-body">商品购买</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
      <span class="mui-icon mui-icon-search"></span>
      <div class="mui-media-body">留言反馈</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
      <span class="mui-icon mui-icon-phone"></span>
      <div class="mui-media-body">视频专区</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
      <span class="mui-icon mui-icon-gear"></span>
      <div class="mui-media-body">联系我们</div></a></li>

  </ul>

</div>

</template>

<script>
export default {
name: "Home"
}
</script>

<style scoped>
.mint-swipe{
  height: 200px;
}
</style>
