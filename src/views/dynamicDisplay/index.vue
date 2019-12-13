<template>
    <div>
      <div class="title">访问量在线统计，仅供参考。</div>
      <div ref="echart" id="container" style="min-width:400px;height:400px"></div>
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
  },
  mounted () {
    this.$nextTick(() => {
      this.initEchart()
    })
  }
}
</script>

<style scoped lang="scss">
@import "~@/style/index/dynamicDisplay.scss";
</style>
