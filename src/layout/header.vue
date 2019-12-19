<template>
    <div>
      <header class="header">
        <div class="box topBox">
          <img src="@/assets/logo1.png" alt="">
          <div class="nav">
            <div class="nav-item" v-for="(item, key) in list" :key="key" :class="{
              active: currentTabIndex === key
            }" @click="handlerClick(key)">
              {{ item }}
            </div>
          </div>
        </div>
      </header>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'header',
  data () {
    return {
      list: ['在线统计', '数据演算']
    }
  },
  methods: {
    ...mapMutations([
      'SET_TABINDEX',
      'SET_NAVINDEX'
    ]),
    handlerClick (key) {
      if (this.currentTabIndex !== key) {
        this.SET_NAVINDEX(0)
        this.$router.push({
          path: this.navList[key][0].route
        })
      }
      this.SET_TABINDEX(key)
    }
  },
  created () {

  },
  props: {

  },
  computed: {
    ...mapState([
      'tabIndex',
      'navList'
    ]),
    currentTabIndex () {
      return this.tabIndex
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~@/style/layout/header.scss';
</style>
