import VueRouter from 'vue-router';
import Vue from 'vue';

import MainPage from '@/Pages/MainPage';
import CardPage from '@/Pages/CardPage';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage,
  },
  {
    path: '/qwe',
    name: 'home',
    component: CardPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

