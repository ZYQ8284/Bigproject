<template>
<div>
 <h1 class="Title">新闻详情</h1>
  <div class="subTile">
    <p>发布时间:</p><p>点击:</p>
  </div>
  <hr>
  <div class="content">
    新闻文本，是指新闻作品或新闻报道的存在形式。广义的新闻文本与广义的新闻足对应的，包括消息文本和通讯文本；狭义仅指消息文本，即纯粹的新闻文本。新闻文本有四个基本特征，文本结构的简单性。结构形式相对单一，结构要素。内在要求缺一不可，易于新闻传播主体、收受主体把握和理解，叙事结构比较简单，大多采用与新闻事实客观结构（时空结构、因果逻辑等）相一致的方式展开。 [1]


    文本语境的低度性。文本语境即由文本结构。文本语义的封闭性。新闻文本是由一系列明确的事实判断语句构成的，从原则上排除意见和情感的主观表达，对开放性的理解形成了语义上的限制。文本语境的明确性。构成新闻文本的语境本质上是传真性的、写真性的、再现性的、记录性的。


  </div>
<!--  新闻的id,这儿是为了子组件能够使用      子组件在调用父组件的属性时,要在props 中接收-->


<comment_box :id="this.id"></comment_box>
</div>
</template>

<script>
import comment from '../Subcompnents/Coment.vue'

export default {

  data(){
    return {
      id:this.$route.params.id,
    }
  },

  components:{
    'comment_box':comment
  }
}
</script>

<style scoped>
.Title{
  color:red;
  font-size: 16px;
  display: flex;
  justify-content: center;
}
.subTile {

  display: flex;
  justify-content: space-between;
}
.subTile p{
  color:blue;
  font-size: 14px;
}

</style>
