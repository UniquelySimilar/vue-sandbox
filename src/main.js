import Vue from 'vue'
import App from './App.vue'

//import router from './router'
//import router from '@/components/stackoverflow/router-params-change/router'

//import store from './store'
import store from '@/components/stackoverflow/change-siblings-color/store'

import 'bootstrap/dist/css/bootstrap.css'
// Uncomment when using Bootstrap components
//import 'jquery'
//import 'bootstrap'

//import MixinPlugin from '@/components/vuetest/plugins/mixin-plugin.js'
//Vue.use(MixinPlugin)

Vue.config.productionTip = false

new Vue({
  //router,
  store,
  render: h => h(App),
}).$mount('#app')
