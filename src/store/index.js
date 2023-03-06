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
        img: 'clock-1',
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
    cardsItem: [
      {
        description: 'Like a pussy',
        price: 'Free ',
        currency: '',
        term: ' / forever',
        button: 'Try for free',
        best: false,
        bg: '#C2C2C2',
        advantages: [
          'Components-driven system',
          'Sales-boosting landing pages',
          'Awesome Feather icons pack',
        ],
      },
      {
        description: '👤 Individual',
        price: '24', // null
        currency: '$', // ''
        term: ' / month',
        button: 'Regular license',
        best: true,
        bg: ' #FDCB6E',
        advantages: [
          'Components-driven system',
          'Sales-boosting landing pages',
          'Awesome Feather icons pack',
          'Themed into 3 different styles',
          'Will help to learn Figma',
        ],
      },

      {
        description: '👥 Corporate',
        price: '12', // null
        currency: '$', // ''
        term: ' / editor',
        button: 'Extended license',
        best: false,
        bg: '#55EFC4',
        advantages: [
          'Components-driven system',
          'Sales-boosting landing pages',
          'Awesome Feather icons pack',
          'Themed into 3 different styles',
        ],
      },
    ],
  },
  getters: {
    getDeliveryItem(state) {
      return state.deliveryItem;
    },
    getCardsItem(state) {
      return state.cardsItem;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});

// const plan = {
//   description: 'Individual',
//   price: 24, // null
//   currency: '$', // ''
//   term: 'month',
//   button: 'Regular license',
//   best: true,
//   advantages: [
//     'Components-driven system',
//     'Sales-boosting landing pages',
//     'Awesome Feather icons pack',
//     'Themed into 3 different styles',
//     'Will help to learn Figma',
//   ],
// };
