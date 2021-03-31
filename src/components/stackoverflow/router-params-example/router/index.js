import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '@/components/stackoverflow/router-params-example/Home'
import ProductAll from '@/components/stackoverflow/router-params-example/ProductAll'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/productall/:id',
    name: 'productall',
    component: ProductAll,
    props: true
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
