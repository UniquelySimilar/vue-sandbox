import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Visitors from '../Visitors.vue'

const routes = [
  {
    path: '/',
    redirect: 'visitors'
  },
  {
    name: 'visitors',
    path: '/visitors/:modal?',
    component: Visitors,
    props: true
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
