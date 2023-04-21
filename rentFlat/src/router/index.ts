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
    ],
  },
  {
    path: '/login',
    name: 'LoginPanelView',
    component: () => import('@/views/LoginPanelView/LoginPanelView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
