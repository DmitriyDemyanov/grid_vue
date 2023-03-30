export default {
  SET_STAR_WARS_LIST(state, payload) {
    state.characters = payload;
  },
  SET_LOADING(state, payload) {
    state.isLoading = payload;
  },
  SET_ERROR_MESSAGE(state, payload) {
    state.errorMessage = payload;
  },
  SET_SEARCH(state, payload) {
    state.search = payload;
  },
};
