<template>
<div class="mui-content">
  <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" >
      <router-link to="/News/info">
        <img class="mui-media-object mui-pull-left" src="../../assets/1.jpg">
        <div class="mui-media-body">
          <h1>体育</h1>
          <div class='mui-ellipsis'><p>腾讯大楚网新</p><p>2020/8/10 3:00 </p></div>
        </div>
      </router-link>
    </li>

    <li class="mui-table-view-cell mui-media" >
      <router-link to="/News/info">
        <img class="mui-media-object mui-pull-left" src="../../assets/1.jpg">
        <div class="mui-media-body">
          <h1>体育</h1>
          <div class='mui-ellipsis'><p>腾讯大楚</p><p>2020/8/10 3:00 </p></div>
        </div>
      </router-link>
    </li>
    <li class="mui-table-view-cell mui-media" >
      <router-link to="/News/info">
        <img class="mui-media-object mui-pull-left" src="../../assets/1.jpg">
        <div class="mui-media-body">
          <h1>体育</h1>
          <div class='mui-ellipsis'><p>腾讯大楚网新闻频</p><p>2020/8/10 3:00 </p></div>
        </div>
      </router-link>
    </li>
    <li class="mui-table-view-cell mui-media" >
      <router-link to="/News/info">
        <img class="mui-media-object mui-pull-left" src="../../assets/1.jpg">
        <div class="mui-media-body">
          <h1>体育</h1>
          <div class='mui-ellipsis'><p>腾讯大楚网的</p><p>2020/8/10 3:00 </p></div>
        </div>
      </router-link>
    </li>
    <li class="mui-table-view-cell mui-media" >
      <router-link to="/News/info">
        <img class="mui-media-object mui-pull-left" src="../../assets/1.jpg">
        <div class="mui-media-body">
          <h1>体育</h1>
          <div class='mui-ellipsis'><p>腾讯大楚网新闻</p><p>2020/8/10 3:00 </p></div>
        </div>
      </router-link>
    </li> <li class="mui-table-view-cell mui-media" >
    <router-link to="/News/info">
      <img class="mui-media-object mui-pull-left" src="../../assets/1.jpg">
      <div class="mui-media-body">
        <h1>体育</h1>
        <div class='mui-ellipsis'><p>腾讯大楚网新闻</p><p>2020/8/10 3:00</p></div>
      </div>
    </router-link>
  </li> <li class="mui-table-view-cell mui-media" >
    <router-link to="/News/info">
      <img class="mui-media-object mui-pull-left" src="../../assets/1.jpg">
      <div class="mui-media-body">
        <h1>体育</h1>
        <div class='mui-ellipsis'><p>腾讯大楚</p><p>2020/8/10 3:00</p></div>
      </div>
    </router-link>
  </li> <li class="mui-table-view-cell mui-media" >
    <router-link to="/News/info">
      <img class="mui-media-object mui-pull-left" src="../../assets/1.jpg">
      <div class="mui-media-body">
        <h1>体育</h1>
        <div class='mui-ellipsis'><p>腾讯大楚网新闻频道,</p><p>2020/8/10 3:00</p></div>
      </div>
    </router-link>
  </li>






  </ul>


</div>
</template>

<script>

import jquery from '../../../node_modules/jquery/dist/jquery.min'

export default {
  name: "NewList",
  data(){
    return {
    News:[]
    };
  },
  created() {
    this.GetNewList();
  },
  methods: {
    GetNewList() {
      $.ajax({
        url:'./New.json',
        type:'get',
        dataType:'json'
      }).then(function (success){
        console.log(success);
      })
    }
  }
}


</script>

<style scoped>
.mui-table-view li h1{
  font-size: 16px;
  display: flex;
  justify-content: start;
}
.mui-table-view .mui-media-body .mui-ellipsis {
  display: flex;
  justify-content: space-between;
}


</style>
