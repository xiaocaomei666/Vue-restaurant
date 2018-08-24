import Vue from 'vue'
import router from './router'
import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import * as qiniu from 'qiniu-js'
import {LogPlugin} from './utils/log.js'
import {log} from './config'
import {CachePlugin} from './utils/cache.js'
import CodePlugin from './utils/code.js'
import store from './store'
import App from './App'

Vue.use(Element)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'})
