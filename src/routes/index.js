import Vue from 'vue'
import VueRouter from 'vue-router'
import { Routes } from '../config'
import { Home, About } from '../containers'
Vue.use(VueRouter)

const routes = [
  {
    path: Routes.root.route,
    component: Home
  },
  {
    path: Routes.about.route,
    component: About
  },
  // catch all redirect
  {
    path: '*',
    redirect: Routes.root.route
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
