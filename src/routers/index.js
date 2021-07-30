import { createRouter, createWebHashHistory } from 'vue-router'
import commonRoutes from './common'
import authRouter from './authRouter'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...commonRoutes,
    ...authRouter
  ]
})
router.beforeEach((to, from, next) => {
  next()
})
router.afterEach((to, from) => {
})
export default router
