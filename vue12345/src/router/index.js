import { createRouter, createWebHistory } from 'vue-router'

import ViewProducts from '@/views/ViewProducts.vue'
import ViewFavorites from '@/views/ViewFavorites.vue'
import ViewPreviousShopping from '@/views/ViewPreviousShopping.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'text-blue-500',
  routes: [
    {
      path: '/',
      name: 'ViewProducts',
      component: ViewProducts
    },
    {
      path: '/favorites',
      name: 'ViewFavorites',
      component: ViewFavorites
    },
    {
      path: '/previous',
      name: 'ViewPreviousShopping',
      component: ViewPreviousShopping
    }
  ]
})

export default router
