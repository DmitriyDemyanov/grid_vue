const BASE_URL = 'https://swapi.dev/api/';

export default {
  async fetchStarWarsCharacters(ctx) {
    ctx.commit('SET_LOADING', true);
    // debugger;
    let errorMessage = '';
    const response = await fetch(`${BASE_URL}people/`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((e) => {
        errorMessage = 'Something went wrong, please try later';
        console.log(e.message || e);
        console.log(' errorMessage ==>', errorMessage);
        return {};
      });

    const { results = [] } = response;

    ctx.commit('SET_STAR_WARS_LIST', results);
    ctx.commit('SET_LOADING',false);
    ctx.commit('SET_ERROR_MESSAGE', errorMessage);
  },
};
