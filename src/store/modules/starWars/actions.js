const BASE_URL = 'https://swapi.dev/api/';

export default {
  async fetchStarWarsCharacters(ctx, url = `${BASE_URL}people/`) {
    ctx.commit('SET_LOADING', true);
    console.log('CTX', ctx);
    let errorMessage = '';
    const response = await fetch(url)
      .then((response) => response.json())
      .then((data) => data)
      .catch((e) => {
        errorMessage = 'Something went wrong, please try later';
        console.log(e.message || e);
        console.log(' errorMessage ==>', errorMessage);
        return {};
      });

    const { results = [], next = null } = response;

    ctx.commit('SET_STAR_WARS_LIST', results);
    ctx.commit('SET_LOADING', false);
    ctx.commit('SET_ERROR_MESSAGE', errorMessage);

    if (next) {
      console.log('======', this);
      ctx.dispatch('fetchStarWarsCharacters', next);
    }
  },

  setSearch({ commit }, payload) {
    commit('SET_SEARCH', payload);
  },
};
