<template>
    <div>
      <div class="banner">
        <div class="main">
          <p>
            <img src="@/assets/icon/time.png" alt="">
            <span>2019-11-25 09:09:00</span>
            <span class="last">QQ同时在线人数</span>
          </p>
          <p>
            <strong>303,071,376</strong>
            <span>历史最高：332,164,438</span>
          </p>
          <p>
            <span>所有数据均来自腾讯QQ</span>
          </p>
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
