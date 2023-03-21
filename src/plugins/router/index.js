import VueRouter from 'vue-router';
import Vue from 'vue';

import HowItWorks from '@/Pages/HowItWorks';
import WhoWeAre from '@/Pages/WhoWeAre';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HowItWorks,
  },
  {
    path: '/WhoWeAre',
    name: 'WhoWeAre',
    component: WhoWeAre,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

