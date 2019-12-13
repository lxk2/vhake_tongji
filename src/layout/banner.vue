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
                <span>2019-11-25 09:09:00</span>
                <span class="last">百度点击量</span>
            </p>
            <p>
              <strong>303,071,376</strong>
              <span>历史最高：332,164,438</span>
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

    }
  },
  methods: {

  },
  created () {
  },
  props: {

  }
}
</script>

<style scoped lang="scss">
  @import '~@/style/layout/banner.scss';
</style>
