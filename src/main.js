import Vue from 'vue'
import App from './App.vue'

//import router from './router'
import router from '@/components/stackoverflow/router-props/router'

//import store from './store'
//import store from './store/react-to-vuex-store.js'
//import store from '@/components/vuetest/vuex-module/store.js'
import store from '@/components/stackoverflow/replace-emit-with-vuex/store'

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
