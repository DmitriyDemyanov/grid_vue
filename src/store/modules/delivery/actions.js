// const API_URL = 'http://localhost:3500/deliveries';

// import axios from '@/plugins/axios';
const BASE_URL = 'http://localhost:3500';

export default {
  async fetchDelivery(ctx) {
    const delivery = await fetch(`${BASE_URL}/deliveries`).then((r) => {
      console.log('Result:deliveries ', r);
      return r.json();
    });
    ctx.commit('SET_DELIVERY', delivery);
  },

  async fetchCardItems(ctx) {
    const delivery = await fetch(`${BASE_URL}/cards`).then((r) => {
      console.log('Result:cards ', r);
      return r.json();
    });
    ctx.commit('SET_CARD_ITEMS', delivery);
  },
};
