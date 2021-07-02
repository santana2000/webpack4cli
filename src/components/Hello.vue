<template>
  <div>

    <h2>{{ message }}</h2>

    <img :src='chartUrl' alt="chart">
    <!-- <img src="../../static/images/chart.png" alt="chart"> -->

    <ul>
      <li class="item">组件li</li>
      <li class="item">组件li</li>
    </ul>

    <div>{{ babelArr }}</div>

  </div>
</template>
<script>

// webpack用到的资源必须走引入流程，环环相嵌
import chartUrl from '../../static/images/chart.png'

// vue本身为什么不需要import,直接从public下面的路径开始写就可以了

export default {
  name: "Hello",
  data: function () {
    return {
      message: "webpack配置组件",

      chartUrl:chartUrl,
      // chartUrl:'../../static/images/chart.png',

      babelArr:[],

    };
  },
  mounted(){
    // this.babelArr = [1,2,3];

    this.babelArr = [1,2,3].map(n => n+1);
  }
};
</script>
<style scoped>
h2 {
  color: rgb(24, 192, 164);
}
img {
  width: 200px;
  height: 160px;
}
.item{
  color: cadetblue;
}
</style>

