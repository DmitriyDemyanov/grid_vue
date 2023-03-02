import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    deliveryItem: [
      {
        title: 'Support',
        text: 'Delivering faster and more personalized support with shared screens and cool design systems for Figma',
        img: 'call',
        bg: '#E84393',
      },
      {
        title: 'Sales growth',
        text: 'Identify qualified customers with easy-to-use live chat messaging and AI-based Sales Bot',
        img: 'clock',
        bg: '#0984E3',
      },
      {
        title: 'Coponents-driven',
        text: 'Delivering faster and more personalized support with shared screens and cool design systems for Figma',
        img: 'lighting',
        bg: '#6C5CE7',
      },
      {
        title: 'Swap the icon',
        text: 'You can toggle to any icon within Instances and customize outlined stroke to more bolder or lighter',
        img: 'like',
        bg: '#00B894',
      },
    ],
  },
  getters: {
    getDeliveryItem(state) {
      return state.deliveryItem;
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
