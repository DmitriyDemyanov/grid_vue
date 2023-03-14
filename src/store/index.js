import Vue from 'vue';
import Vuex from 'vuex';

import delivery from './modules/delivery';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    socialIcons: ['facebook', 'linkedin', 'slack', 'twitter'],
    socialLinks: [
      'About Fapster app',
      'Onhovered / Active',
      'We are hiring!',
      'Get in Touch',
      'Privacy Policy',
      'Resources',
      'Things We Like',
      'Terms of Service',
    ],
    inputPlaceholder: [
      {
        title: 'Your name',
        img: 'icon-user',
      },
      {
        title: 'E-mail',
        img: 'icon-mail',
      },
    ],
  },
  getters: {
   
    getSocialIcons(state) {
      return state.socialIcons;
    },
    getSocialLinks(state) {
      return state.socialLinks;
    },
    getInputPlaceholder(state) {
      return state.inputPlaceholder;
    },
  },
  mutations: {},
  actions: {},
  modules: {
    delivery,
  },
});

