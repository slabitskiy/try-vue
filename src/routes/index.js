import Vue from 'vue'
import VueRouter from 'vue-router'
import { Routes } from '../config'
import Home from './Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: Routes.root.route,
    component: Home
  },
  // catch all redirect
  {
    path: '*',
    redirect: Routes.root.route
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  base: __dirname
})

export default router
