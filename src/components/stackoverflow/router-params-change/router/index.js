import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../Home.vue'
import RouterParamsChange from '../RouterParamsChange.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/routerparamschange/:id',
    name: 'routerParamsChange',
    component: RouterParamsChange,
    props: true
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
