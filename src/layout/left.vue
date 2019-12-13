<template>
    <div>
      <div id="left">
        <div class="item" v-for="(item, key) in (navList[currentTabIndex] || [])" :key="key" :class="{
          active: currentNavIndex === key
        }" @click="handlerClick(item.route, key)">
          <div>
            <img :src="item.icon" alt="">
            <span>{{ item.name }}</span>
          </div>
        </div>
<!--        <div class="item" @click="$router.push({-->
<!--          path: '/dynamicDisplay'-->
<!--        })">-->
<!--          <div>-->
<!--            <img src="@/assets/icon/icon2.png" alt="">-->
<!--            <span>动态展示</span>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="item" @click="$router.push({-->
<!--          path: '/description'-->
<!--        })">-->
<!--          <div>-->
<!--            <img src="@/assets/icon/icon3.png" alt="">-->
<!--            <span>统计说明</span>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="item" @click="$router.push({-->
<!--            path: '/interface'-->
<!--          })">-->
<!--          <div>-->
<!--            <img src="@/assets/icon/icon4.png" alt="">-->
<!--            <span>接口调用</span>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'left',
  data () {
    return {

    }
  },
  methods: {
    ...mapMutations([
      'SET_NAVINDEX'
    ]),
    handlerClick (route, index) {
      this.SET_NAVINDEX(index)
      this.$router.push({
        path: route
      })
    }
  },
  created () {
  },
  props: {

  },
  computed: {
    ...mapState([
      'tabIndex',
      'navIndex',
      'navList'
    ]),
    currentTabIndex () {
      return this.tabIndex
    },
    currentNavIndex () {
      return this.navIndex
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~@/style/layout/left.scss';
</style>
