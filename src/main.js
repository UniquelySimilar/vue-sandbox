import Vue from 'vue'
import App from './App.vue'

//import router from './router'

//import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
// Uncomment when using Bootstrap components
//import 'jquery'
//import 'bootstrap'

Vue.config.productionTip = false

new Vue({
//  router,
//  store,
  render: h => h(App),
}).$mount('#app')
