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
  SET_LINKS(state, payload) {
    console.log('88888888888',payload.next)
    state.linkNext = payload.next;
    state.linkPrevious = payload.previous;
  },
};
