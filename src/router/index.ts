import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomePage.vue'),
      meta: { title: 'Home', requiresAuth: false },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/AboutPage.vue'),
      meta: { title: 'About', requiresAuth: false },
    }
  ]
})

export default router
