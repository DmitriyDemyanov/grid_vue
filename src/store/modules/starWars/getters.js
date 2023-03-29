export default {
  getCharacters(state) {
    return state.characters;
  },
  getFilteredCharacters(state) {
    return function (gender) {
      return state.characters.filter(user => user.gender === gender);
    }
  },
  isLoading: (state) => state.isLoading,
  getErrorMessage: (state) => state.errorMessage,
};
