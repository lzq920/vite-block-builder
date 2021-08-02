import { createRouter, createWebHashHistory } from 'vue-router'
import commonRoutes from './commonRoutes'
import store from '../stores'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...commonRoutes
  ]
})
router.beforeEach(async (to, from, next) => {
  const hasToken = store.getters['user/token']
  const hasRole = store.getters['role/role'] && store.getters['role/role'].length
  if (hasToken) {
    if (to.name === 'login') {
      next({
        path: '/'
      })
    } else {
      if (hasRole) {
        next()
      } else {
        const accessRoute = await store.dispatch('router/getRoutes')
        router.addRoute(accessRoute)
        next({
          ...to,
          replace: true
        })
      }
    }
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
