import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'
//import store from './store/react-to-vuex-store.js'
import store from '@/components/vuetest/vuex-module/store.js'

import 'bootstrap/dist/css/bootstrap.css'
// Uncomment when using Bootstrap components
//import 'jquery'
//import 'bootstrap'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
