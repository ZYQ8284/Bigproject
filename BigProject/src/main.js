// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

import 'mint-ui/lib/style.css'

import {Header,Swipe, SwipeItem} from 'mint-ui'


import router from './router/index'

import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'

Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)


Vue.component(Header.name,Header)
//安装路由包
import VueRouter from 'vue-router'
//挂载路由到vue中
Vue.use(VueRouter)

Vue.http.options.root='./data/data.json'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:c=>c(App),

  // components: { App },
  template: '<App/>'
})
