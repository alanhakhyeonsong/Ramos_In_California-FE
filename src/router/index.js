import Vue from 'vue'
import VueRouter from 'vue-router'
// import {getAccessToken} from "@/utils/cookies";
// import store from '../store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/signup',
    component: () => import('@/views/SignupPage.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/new',
    component: () => import('@/views/PostAddPage.vue'),
    // beforeEnter,
  },
  {
    path: '/board/:id',
    component: () => import('@/views/PostDetailViewPage.vue')
  },
  {
    path: '*',
    component: () => import('@/views/NotFoundPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

// function beforeEnter(to, from, next) {
//   if (store.getters['isLogin'] || getAccessToken()) {
//     next();
//   } else {
//     alert('로그인이 필요합니다.');
//     next('/login');
//   }
// }