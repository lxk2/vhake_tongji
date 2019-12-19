import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'lib-flexible'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 引入样式
import Config from './api/config'
import Http from './api/request'
import Utils from './utils/utils'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as filters from './filters' // global filters

// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
// 导航守卫
router.beforeEach((to, from, next) => {
  NProgress.start() // 进度条开始
  if (to.path === '/') {
    next({
      path: '/baidu'
    })
  }
  if (to.path.indexOf('/baidu') === -1) {
    next({
      path: '/baidu' + to.path
    })
  }
  next()
})
router.afterEach(() => {
  window.scrollTo(0, 0)
  NProgress.done() // 进度条结束
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.prototype.$http = Http
Vue.prototype.$config = Config
Vue.prototype.$utils = Utils
Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
