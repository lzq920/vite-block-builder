import { createRouter, createWebHashHistory } from 'vue-router'
import commonRoutes from './commonRoutes'
import store from '../stores'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...commonRoutes
  ]
})
router.beforeEach((to, from, next) => {
  if (store.getters['user/token']) {
    next()
  } else {
    const whiteList = commonRoutes.map(item => item.name)
    if (whiteList.includes(to.name)) {
      next()
    } else {
      next('/login')
    }
  }
})
router.afterEach((to, from) => {
})
export default router
