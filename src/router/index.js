import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/interface',
    name: 'interface',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/interface')
  },
  {
    path: '/description',
    name: 'description',
    component: () => import('../views/description')
  },
  {
    path: '/dynamicDisplay',
    name: 'dynamicDisplay',
    component: () => import('../views/dynamicDisplay')
  },
  {
    path: '/calculus/index',
    name: 'calculus/index',
    component: () => import('../views/calculus/index')
  },
  {
    path: '/calculus/verification',
    name: 'calculus/verification',
    component: () => import('../views/calculus/verification')
  },
  {
    path: '/calculus/description',
    name: 'calculus/description',
    component: () => import('../views/calculus/description')
  },
  {
    path: '/calculus/interface',
    name: 'calculus/interface',
    component: () => import('../views/calculus/interface')
  }
]

const router = new VueRouter({
  routes
})

export default router
