export default [{
  name: '/pages',
  path: '/pages',
  meta: {
    requiredAuth: true,
    role: ['admin']
  },
  redirect: '/pages/list',
  component: () => import('../views/index.vue'),
  children: [{
    name: 'pagesList',
    path: '/pages/list',
    meta: {
      requiredAuth: true,
      role: ['admin']
    },
    component: () => import('../views/pages/index.vue')
  }, {
    name: 'pagesCreate',
    path: '/pages/create',
    meta: {
      requiredAuth: true,
      role: ['admin']
    },
    component: () => import('../views/pages/create.vue')
  }]
}]
