export default {
  getCharacters(state) {
    return state.characters;
  },
  getFilteredCharacters(state) {
    if (state.search) {
      return state.characters.filter((user) =>
        user.name.toLowerCase().includes(state.search.toLowerCase())
      );
    }
    return state.characters;
  },
  isLoading: (state) => state.isLoading,
  getErrorMessage: (state) => state.errorMessage,
  getLinkPrevious(state) {
    return state.linkPrevious;
  },
  getLinkNext(state) {
    return state.linkNext;
  },
};
