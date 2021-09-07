import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Views from './views'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Views.Home
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router