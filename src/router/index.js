import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Hello from '@/components/HelloWorld'
import ConstructionNotice from '@/components/ConstructionNotice'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'todo',
    component: ConstructionNotice
  },
  {
    path: '/vue_dev_links',
    name: 'hello',
    component: Hello
  }
]

/*
{
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" *\/ '../views/About.vue')
}
*/

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
