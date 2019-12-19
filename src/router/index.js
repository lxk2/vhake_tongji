import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index'

Vue.use(VueRouter)

let BasePath = '/baidu'

const routes = [
  {
    path: BasePath,
    name: 'home',
    component: Home
  },
  {
    path: `${BasePath}/interface`,
    name: 'interface',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/interface')
  },
  {
    path: `${BasePath}/description`,
    name: 'description',
    component: () => import('../views/description')
  },
  {
    path: `${BasePath}/dynamicDisplay`,
    name: 'dynamicDisplay',
    component: () => import('../views/dynamicDisplay')
  },
  {
    path: `${BasePath}/calculus/index`,
    name: 'calculus/index',
    component: () => import('../views/calculus/index')
  },
  {
    path: `${BasePath}/calculus/verification`,
    name: 'calculus/verification',
    component: () => import('../views/calculus/verification')
  },
  {
    path: `${BasePath}/calculus/description`,
    name: 'calculus/description',
    component: () => import('../views/calculus/description')
  },
  {
    path: `${BasePath}/calculus/interface`,
    name: 'calculus/interface',
    component: () => import('../views/calculus/interface')
  }
]

const router = new VueRouter({
  routes
})

export default router
