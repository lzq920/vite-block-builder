import { createRouter, createWebHashHistory } from 'vue-router'
import commonRoutes from './commonRoutes'
import store from '../stores'
import api from '../interfaces'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...commonRoutes
  ]
})
router.beforeEach(async (to, from, next) => {
  const hasToken = Boolean(store.getters['user/token'])
  const hasRole = Boolean(store.getters['role/role'] && store.getters['role/role'].length)
  if (hasToken) {
    if (to.name === 'login') {
      next({
        path: '/'
      })
    } else {
      if (hasRole) {
        next()
      } else {
        const { data } = await api.getUserInfo()
        await store.dispatch('user/setUser', data)
        await store.dispatch('role/setRole', data.role)
        const accessRoute = await store.dispatch('router/getRoutes')
        accessRoute.forEach(item => {
          router.addRoute(item)
        })
        next({
          path: to.path,
          replace: true
        })
      }
    }
  } else {
    const whiteList = commonRoutes.map(item => item.path)
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
export default router
