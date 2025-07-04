import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleView from '../views/ArticleView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () => import('../views/ArticleView.vue'),
      props: true,
    },
    {
      path: '/signup/',
      name: 'signup',
      component: () => import('../views/SignupView.vue'),
    },
    {
      path: '/login/',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
  ],
})

export default router
