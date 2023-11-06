
const routes = [
  {
    path: '/Ansh',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'Profile', component: () => import('pages/IndexPage.vue') },
      { path: 'AboutMe', component: () => import('pages/MyProfile.vue') },
      { path: 'Technology', component: () => import('pages/MyTech.vue') },
      { path: 'extracurricular', component: () => import('pages/MyCurricular.vue') },
      { path: 'education', component: () => import('pages/MyEducation.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
