export default [
  {
    name: 'index',
    path: '/',
    meta: {
      requiredAuth: true
    },
    redirect: '/pages/list',
    component: () => import('../components/main-layout/index.vue'),
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
