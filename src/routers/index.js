import { createRouter, createWebHashHistory } from 'vue-router'
import commonRoutes from './common'
import indexView from '../views/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...commonRoutes,
    {
      name: 'index',
      path: '/',
      meta: {
        requiredAuth: true
      },
      component: indexView,
      children: [{
        name: 'pagesList',
        path: '/pages/list',
        meta: {
          requiredAuth: true
        },
        component: () => import('../views/pages/index.vue')
      }, {
        name: 'pagesCreate',
        path: '/pages/create',
        meta: {
          requiredAuth: true
        },
        component: () => import('../views/pages/create.vue')
      }]
    }
  ]
})
router.beforeEach((to, from, next) => {
  next()
})
router.afterEach((to, from) => { })
export default router
