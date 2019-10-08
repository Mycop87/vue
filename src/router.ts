import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import CreateUser from '@/views/CreateUser.vue';
import { AuthService } from '@/services/auth.service';

const authService =  new AuthService();

Vue.use(Router);

const authGuard = (to: any, from: any, next: any) => {
  if (!authService.token) {
    next('/login');
    return;
  }
  next();
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: authGuard,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      beforeEnter: authGuard,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/create-user',
      name: 'create-user',
      component: CreateUser,
    },
    {
      path: '*',
      redirect: '/login',
    },
  ],
});
