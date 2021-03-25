import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '@/components/stackoverflow/router-params-example/Home'
import Detail from '@/components/stackoverflow/router-params-example/Detail'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
    props: true
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
