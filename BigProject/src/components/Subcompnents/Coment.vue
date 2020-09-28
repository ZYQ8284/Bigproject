<template>
 <div class="info_nav">
   <h1>发表评论</h1>
   <hr>
   <textarea class="TextArea" v-model="msg" placeholder="请输入发表的内容,最多不可超过200" maxlength="200"></textarea>
   <mt-button type="primary" size="large">发表评论</mt-button>
   <div class="cmt_list">
     <div class="cmt_item">
       <p class="cmt_title">发表时间:</p>
       <p class="cmt_body">非凡脆感,凹凸才够味</p>
       <p class="cmt_count">浏览次数</p>
     </div>
     <div class="cmt_item">
       <p class="cmt_title">发表时间:</p>
       <p class="cmt_body">非凡脆感,凹凸才够味</p>
       <p class="cmt_count">浏览次数</p>
     </div>
     <div class="cmt_item">
       <p class="cmt_title">发表时间:</p>
       <p class="cmt_body">非凡脆感,凹凸才够味</p>
       <p class="cmt_count">浏览次数</p>
     </div> <div class="cmt_item">
     <p class="cmt_title">发表时间:</p>
     <p class="cmt_body">非凡脆感,凹凸才够味</p>
     <p class="cmt_count">浏览次数</p>
   </div>
     <div class="cmt_item">
       <p class="cmt_title">发表时间:</p>
       <p class="cmt_body">非凡脆感,凹凸才够味</p>
       <p class="cmt_count">浏览次数</p>
     </div> <div class="cmt_item">
     <p class="cmt_title">发表时间:</p>
     <p class="cmt_body">非凡脆感,凹凸才够味</p>
     <p class="cmt_count">浏览次数</p>
   </div> <div class="cmt_item">
     <p class="cmt_title">发表时间:</p>
     <p class="cmt_body">非凡脆感,凹凸才够味</p>
     <p class="cmt_count">浏览次数</p>
   </div> <div class="cmt_item">
     <p class="cmt_title">发表时间:</p>
     <p class="cmt_body">非凡脆感,凹凸才够味</p>
     <p class="cmt_count">浏览次数</p>
   </div>





   </div>
<mt-button type="danger"size="large" plain @click="postComment">加载更多</mt-button>

 </div>
</template>

<script>

export default {
  data() {
    return {
      msg:''
    }
  },
  // postComment(){
  //   this.$http.post("api/getcomment",$route.params.id)
  //   .then(suc=>{
  //     var cmt={
  //       user_name:"匿名用户",
  //       add_time:"Date.now()",
  //       content:this.msg.trim()
  //     };
  //     this.comments.unshift(cmt);
  //     this.msg="";
  //
  //   })
  // }
}
</script>

<style scoped>
.info_nav h1 {
  font-size: 18px;
  color: red;
  display: flex;
  justify-content: start;
}
.TextArea{

height: 100px;
  font-size:12px;
}


.info_nav .cmt_item{ margin: 10px 0;
    font-size: 10px;
  display: flex;
  background: #6d6d72;
  justify-content: space-between;
}
</style>
