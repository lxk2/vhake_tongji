<template>
  <div class="main">
      <div class="content-x" v-html="content">

      </div>
    <!-- <p>本网站提供数据rest api接口，接口地址：http://77tj.org/api/tencent/car</p>
    <p>返回最近10分钟内的腾讯在线人数</p>
    <p>请求方式：get</p>
    <p>返回类型：json</p>
    <p>返回结果说明：[{"onlinetime":"2016-11-21 18:17:00","car":[1,2,3,4,5,6,7,8,9,10]},{"onlinetime":"2016-11-21 18:16:00","car":[1,2,3,4,5,6,7,8,9,10]}......]<br>
      类型：object 数组；说明：最近10分钟内腾讯在线的人数；onlinetime：时间； 演算结果：结果号码；</p> -->
  </div>
</template>

<script>
import data from './data'
import methods from './methods'
export default {
  name: 'index',
  data,
  methods,
  created () {
    this.getData()
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
// @import "~@/style/index/interface.scss";
@import "~@/style/calculus/description.scss";
</style>
