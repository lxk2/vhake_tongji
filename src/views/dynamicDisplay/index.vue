<template>
    <div>
      <div class="title">访问量在线统计，仅供参考。</div>
      <div class="c-con">
        <div class="c-item">
          <div class="label">在线人数</div>
          <div class="value">{{ temp[0] }}</div>
        </div>
        <div class="c-item">
          <div class="label">新用户数</div>
          <div class="value">{{ temp[1] }}</div>
        </div>
        <div class="c-item">
          <div class="label">总用户数</div>
          <div class="value">{{ temp[2] }}</div>
        </div>
      </div>
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
      this.getOptions()
    })
  }
}
</script>

<style scoped lang="scss">
@import "~@/style/index/dynamicDisplay.scss";
</style>
