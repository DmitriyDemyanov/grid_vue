const BASE_URL = 'https://swapi.dev/api/';

export default {
  async fetchStarWarsCharacters(ctx) {
    const starWarsCharacters = await fetch(`${BASE_URL}people/`)
      .then((response) => response.json())
      .then((data) => data);
    console.log('starWarsCharacters:', starWarsCharacters);
    ctx.commit('SET_STAR_WARS_LIST', starWarsCharacters);
  },
};
