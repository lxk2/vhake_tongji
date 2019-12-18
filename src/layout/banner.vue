<template>
    <div>
      <div class="banner">
        <div class="box">
          <div class="img">
            <img src="@/assets/icon/homepage_logo.png" alt="">
          </div>
          <div class="main">
            <p>
                <img src="@/assets/icon/time.png" alt="">
                <span>{{ netData.new.opentime }}</span>
                <span class="last">百度点击量</span>
            </p>
            <p>
              <strong>{{ netData.new.resultnum | toThousandFilter }}</strong>
              <span>历史最高：{{ netData.top.resultnum | toThousandFilter }}</span>
            </p>
            <p>
              <span>所有数据均来自百度统计</span>
            </p>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      netData: {
        new: {},
        top: {}
      },
      timer: null
    }
  },
  methods: {
    loop () {
      let that = this
      that.$http.post('v1.home/loopNewResult')
        .then(res => {
          if (res.code === that.$config.SUCCESS_CODE) {
            that.netData = res.data
          } else {
            that.netData = {
              new: {},
              top: {}
            }
          }
        })
    }
  },
  created () {
    this.loop()
    this.timer = setInterval(() => {
      this.loop()
    }, 10000)
  },
  props: {

  }
}
</script>

<style scoped lang="scss">
  @import '~@/style/layout/banner.scss';
</style>
