import Vue from 'vue'
import VueRouter from 'vue-router'
import Exercise1 from '../views/Exercise-1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Exercise-1',
    component: Exercise1
  },
  {
    path: '/Exercise-2',
    name: 'Exercise2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Exercise-2.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
