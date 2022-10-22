
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/tableau', component: () => import('pages/tableau.vue') },
      { path: '/form', name: 'Form',component: () => import('pages/form.vue') },
      { path: '/recommendation', name: 'recommendation', component: () => import('pages/recommendation.vue') },
      { path: '/tinder', name: 'tinder', component: () => import('pages/tinder.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
]

export default routes
