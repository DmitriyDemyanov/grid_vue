import Vue from 'vue';
import App from './App.vue';
import store from './store';
import { BootstrapVue } from 'bootstrap-vue';

import router from '@/plugins/router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
