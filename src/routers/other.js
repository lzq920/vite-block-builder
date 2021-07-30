export default [{
  name: 'index',
  path: '/',
  meta: {
    requiredAuth: true
  },
  component: () => import('../views/index.vue'),
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
}]
