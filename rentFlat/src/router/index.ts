// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/layout.vue'),
    children: [
      {
        path: '/home',
        name: 'HomeView',
        component: () => import('@/views/HomeViews/HomeView.vue'),
      },
      {
        path: '/login',
        name: "LoginView",
        component: () => import('@/views/LoginView/LoginView.vue')
      }
    ],
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
