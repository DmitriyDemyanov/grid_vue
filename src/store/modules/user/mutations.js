export default {
  SET_DELIVERY(state, payload) {
    state.deliveryList = payload;
  },
  SET_CARD_ITEMS(state,payload) {
    state.cardItemsList = payload;
  }
};