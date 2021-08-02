export default [
  {
    name: 'index',
    path: '/',
    meta: {
      requiredAuth: false
    },
    component: () => import('../views/index.vue')
  },
  {
    name: 'login',
    path: '/login',
    meta: {
      requiredAuth: false
    },
    component: () => import('../views/common/login.vue')
  },
  {
    name: 'register',
    path: '/register',
    meta: {
      requiredAuth: false
    },
    component: () => import('../views/common/register.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('../views/common/404.vue')
  }
]
