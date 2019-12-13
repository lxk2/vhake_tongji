<template>
    <div>
      <Header ref="header"></Header>
      <Banner ref="banner"></Banner>
      <div class="main box" :style="{
        minHeight: 'calc(100vh - ' + offsetHeight + 'px)'
      }">
        <Left></Left>
        <div id="right">
          <router-view/>
        </div>
      </div>
      <Footer ref="footer"></Footer>
    </div>
</template>

<script>
import Banner from '@/layout/banner.vue'
import Footer from '@/layout/footer.vue'
import Header from '@/layout/header.vue'
import Left from '@/layout/left.vue'
export default {
  name: 'index',
  data () {
    return {
      offsetHeight: 0
    }
  },
  methods: {

  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      let offsetHeight = this.$refs.header.$el.offsetHeight + this.$refs.banner.$el.offsetHeight + this.$refs.footer.$el.offsetHeight
      this.offsetHeight = offsetHeight
    })
  },
  props: {

  },
  components: {
    Header,
    Footer,
    Left,
    Banner
  }
}
</script>

<style scoped lang="scss">
  @import "~@/style/layout/index.scss";
</style>
