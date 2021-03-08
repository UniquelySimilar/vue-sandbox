import Vue from 'vue'
import VueRouter from 'vue-router'
import UserList from '@/components/stackoverflow/router-link/UserList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/users'
  },
  {
    path: '/users',
    name: 'Users',
    component: UserList
  },
  {
    path: '/user/:id',
    name: 'User',
    component: () => import('@/components/stackoverflow/router-link/SingleUser'),
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router