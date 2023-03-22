import VueRouter from 'vue-router';
import Vue from 'vue';

import HowItWorks from '@/pages/HowItWorks';
import WhoWeAre from '@/pages/WhoWeAre';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HowItWorks,
  },
  {
    path: '/who-we-are',
    name: 'WhoWeAre',
    component: WhoWeAre,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

