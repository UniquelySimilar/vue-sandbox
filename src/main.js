import Vue from 'vue'
import App from './App.vue'

// import router from './router'
// import router from '@/components/stackoverflow/route-param-modal/router'

// import store from './store'
import store from '@/components/stackoverflow/vuex-module-action/store'

import 'bootstrap/dist/css/bootstrap.css'
// Uncomment when using Bootstrap components
// import 'jquery'
// import 'bootstrap'

// Font Awesome
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  //router,
  store,
  render: h => h(App),
}).$mount('#app')
