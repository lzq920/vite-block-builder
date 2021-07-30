import { createRouter, createWebHashHistory } from 'vue-router'
import commonRoutes from './common'
import authRoutes from './other'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...commonRoutes,
    ...authRoutes
  ]
})
router.beforeEach((to, from, next) => {
  next()
})
router.afterEach((to, from) => {
})
export default router
