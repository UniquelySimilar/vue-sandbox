import Vue from 'vue'
import App from './App.vue'

// import router from './router'
// import router from '@/components/stackoverflow/route-param-modal/router'

// import store from './store'
import store from '@/components/vue-help-forum/sort-by-date/store'

import 'bootstrap/dist/css/bootstrap.css'
// Uncomment when using Bootstrap components
// import 'jquery'
// import 'bootstrap'

Vue.config.productionTip = false

new Vue({
  //router,
  store,
  render: h => h(App),
}).$mount('#app')
