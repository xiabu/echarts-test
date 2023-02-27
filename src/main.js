import Vue from 'vue'
import D2REM from 'design2rem'
import 'core-js/stable'
import 'regenerator-runtime/runtime'


import App from './App'
import router from './router'
import store from './store'
import Utils from './utils'
import { UnauthorizedException } from '@/exceptions'

// Vue.component('downloadExcel', JsonExcel)
import Highcharts from 'highcharts'

import Highcharts3d from 'highcharts/highcharts-3d'

Highcharts3d(Highcharts)

D2REM.setOption({
  designW: 1920,
  simulateW: 1920,
  simulateH: 1080,
})

Vue.prototype.$remSize = D2REM.remSize
Vue.prototype.$utils = Utils

window.addEventListener('resize', () => {
  Vue.prototype.$remSize = D2REM.remSize
})
const errorHandler = (error) => {
  if (error === UnauthorizedException && router.currentRoute.name !== 'Login') {
    router.replace('/')
  }
  console.error(error)
}
window.addEventListener('error', (ex) => {
  errorHandler(ex.error)
})
window.addEventListener('unhandledrejection', (ev) => {
  // handle error here, for example log
  if (ev.reason instanceof Error) {
    errorHandler(ev.reason)
  }
})
// API.login()
//   .then(() => {
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
// })
