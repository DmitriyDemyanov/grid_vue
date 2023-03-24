export default {
  getCharacters(state) {
    return state.characters;
  },
  isLoading: (state) => state.isLoading,
  getErrorMessage: (state) => state.errorMessage,
};
