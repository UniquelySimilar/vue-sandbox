import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/components/stackoverflow/router-wildcard-match/Home'
import RouteOne from '@/components/stackoverflow/router-wildcard-match/RouteOne'
import RouteTwo from '@/components/stackoverflow/router-wildcard-match/RouteTwo'
import WildCard from '@/components/stackoverflow/router-wildcard-match/WildCard'

const routes = [
  {
    path: '/*',
    name: 'wildcard',
    component: WildCard
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/routeone',
    name: 'routeOne',
    component: RouteOne,
  },
  {
    path: '/routetwo',
    name: 'routeTwo',
    component: RouteTwo,
  },
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
