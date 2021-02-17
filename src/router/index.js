import Vue from 'vue'
import VueRouter from 'vue-router'
import WatchRouteObject from '@/components/vue-help-forum/WatchRouteObject'

Vue.use(VueRouter)

const routes = [
  {
    path: '/user/:id',
    name: 'userDetail',
    component: WatchRouteObject,
    props: true
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
