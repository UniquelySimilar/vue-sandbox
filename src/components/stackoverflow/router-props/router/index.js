import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/components/stackoverflow/router-props/Home'
import RouterProps from '@/components/stackoverflow/router-props/RouterProps'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/routerprops/:id',
    name: 'routerProps',
    component: RouterProps,
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
