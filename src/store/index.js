import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tabIndex: 0,
    navIndex: 0,
    navList: [
      [
        {
          name: '统计结果',
          route: '/',
          icon: require('../assets/icon/icon1.png')
        },
        {
          name: '动态展示',
          route: '/dynamicDisplay',
          icon: require('../assets/icon/icon2.png')
        },
        {
          name: '统计说明',
          route: '/description',
          icon: require('../assets/icon/icon3.png')
        },
        {
          name: '接口调用',
          route: '/interface',
          icon: require('../assets/icon/icon4.png')
        }
      ],
      [
        {
          name: '统计结果',
          route: '/calculus/index',
          icon: require('../assets/icon/icon1.png')
        },
        {
          name: '结果验证',
          route: '/calculus/verification',
          icon: require('../assets/icon/icon0.png')
        },
        {
          name: '统计说明',
          route: '/calculus/description',
          icon: require('../assets/icon/icon3.png')
        },
        {
          name: '接口调用',
          route: '/calculus/interface',
          icon: require('../assets/icon/icon4.png')
        }
      ]
    ]
  },
  mutations: {
    SET_TABINDEX: (state, value) => {
      state.tabIndex = value
    },
    SET_NAVINDEX: (state, value) => {
      state.navIndex = value
    }
  },
  actions: {
  },
  modules: {
  }
})
