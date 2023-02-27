import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/index.vue'
import Index2 from '../views/index2.vue'
import Index1 from '../views/index1.vue'
import Index3 from '../views/index3.vue'
import Index4 from '../views/index4.vue'
import Index5 from '../views/index5.vue'
import Index6 from '../views/index6.vue'
import HomeView from '../views/HomeView.vue'
import EchartsDemo from '../views/echartsDemo2.vue'

Vue.use(VueRouter)


var routes = [
  {
    path: '/index',
    name: 'Index',
    component: Index,
  },
  {
    path: '/index1',
    name: 'Index1',
    component: Index1,
  },
  {
    path: '/index2',
    name: 'Index2',
    component: Index2,
  },
  {
    path: '/index3',
    name: 'Index3',
    component: Index3,
  },
  {
    path: '/index4',
    name: 'Index4',
    component: Index4,
  },
  {
    path: '/index5',
    name: 'Index5',
    component: Index5,
  },
  {
    path: '/index6',
    name: 'Index6',
    component: Index6,
  },
  {
    path: '/index7',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/index8',
    name: 'EchartsDemo',
    component: EchartsDemo,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: '/echart-test/',
  routes,
})


export default router
