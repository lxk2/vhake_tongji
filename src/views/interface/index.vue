<template>
    <div class="main">
      <div class="content-x" v-html="content">

      </div>
      <!-- <p>本网站提供数据rest api接口，接口地址：http://77tj.org/api/tencent/online</p>
      <p>备用接口地址1：http://qniupin.com/api/tencent/online</p>
      <p>返回最近10分钟内的腾讯QQ在线人数</p>
      <p>请求方式：get</p>
      <p>返回类型：json</p>
      <p>返回结果说明：[{"onlinetime":"2016-11-21 18:17:00","onlinenumber":233192404,"onlinechange":-24219},{"onlinetime":"2016-11-21 18:16:00","onlinenumber":233216623,"onlinechange":-25755},{"onlinetime":"2016-11-21 18:15:00","onlinenumber":233242378,"onlinechange":-20342},{"onlinetime":"2016-11-21 18:14:00","onlinenumber":233262720,"onlinechange":-45590},{"onlinetime":"2016-11-21 18:13:00","onlinenumber":233308310,"onlinechange":-26064},{"onlinetime":"2016-11-21 18:12:00","onlinenumber":233334374,"onlinechange":-111126},{"onlinetime":"2016-11-21 18:11:00","onlinenumber":233445500,"onlinechange":-24326},{"onlinetime":"2016-11-21 18:09:00","onlinenumber":233606354,"onlinechange":-59149},{"onlinetime":"2016-11-21 18:08:00","onlinenumber":233665503,"onlinechange":-114166},{"onlinetime":"2016-11-21 18:07:00","onlinenumber":233779669,"onlinechange":-143377}]<br>
        类型：object 数组；说明：最近10分钟内腾讯QQ在线的人数；onlinetime：时间； onlinenumber：在线人数； onlinechange： 变化值；</p> -->
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
@import "~@/style/index/description.scss";
</style>
