// const API_URL = 'http://localhost:3500/deliveries';

// import axios from '@/plugins/axios';

export default {
  async fetchDelivery(ctx) {
    const x = await fetch('http://localhost:3500/deliveries').then((r) =>
      r.json()
    );
    console.log('>>>',ctx);
    console.log('>>>', x);
    /*
    const res = await axios
      .get('http://localhost:3500/deliveries')
      .then((response) => response.json());
    console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>.',res);
    */
  },
};
