script
<template>
  <div class="wrapper-card">
    <div class="d-flex wrapper-char_name">
      <div
        class="image-icon d-flex justify-content-center align-items-center"
        :class="`gender-${character.gender}`"
      >
        <img
          :src="require(`@/assets/images/icons/${changeImage}.svg`)"
          alt="icon"
        />
      </div>
      <div class="name-character">{{ character.name }}</div>
    </div>

    <div class="descr-character">
      hair: <span class="appearance"> {{ character.hair_color }} </span>
    </div>
    <div class="descr-character">
      skin: <span class="appearance"> {{ character.skin_color }} </span>
    </div>
    <div class="descr-character">
      eye: <span class="appearance"> {{ character.eye_color }} </span>
    </div>
    <div class="descr-character">
      height: <span class="appearance"> {{ convertHeight }} </span>
    </div>
    <div class="btn-details">
      <UserButton text="Details" />
    </div>
  </div>
</template>

<script>
import UserButton from '@/components/UserButton';

const x = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/6/',
    ],
    species: [],
    vehicles: [
      'https://swapi.dev/api/vehicles/14/',
      'https://swapi.dev/api/vehicles/30/',
    ],
    starships: [
      'https://swapi.dev/api/starships/12/',
      'https://swapi.dev/api/starships/22/',
    ],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    url: 'https://swapi.dev/api/people/1/',
  },
  {
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/4/',
      'https://swapi.dev/api/films/5/',
      'https://swapi.dev/api/films/6/',
    ],
    species: ['https://swapi.dev/api/species/2/'],
    vehicles: [],
    starships: [],
    created: '2014-12-10T15:10:51.357000Z',
    edited: '2014-12-20T21:17:50.309000Z',
    url: 'https://swapi.dev/api/people/2/',
  },
  {
    name: 'R2-D2',
    height: '96',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
    homeworld: 'https://swapi.dev/api/planets/8/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/4/',
      'https://swapi.dev/api/films/5/',
      'https://swapi.dev/api/films/6/',
    ],
    species: ['https://swapi.dev/api/species/2/'],
    vehicles: [],
    starships: [],
    created: '2014-12-10T15:11:50.376000Z',
    edited: '2014-12-20T21:17:50.311000Z',
    url: 'https://swapi.dev/api/people/3/',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/6/',
    ],
    species: [],
    vehicles: [],
    starships: ['https://swapi.dev/api/starships/13/'],
    created: '2014-12-10T15:18:20.704000Z',
    edited: '2014-12-20T21:17:50.313000Z',
    url: 'https://swapi.dev/api/people/4/',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
    homeworld: 'https://swapi.dev/api/planets/2/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/6/',
    ],
    species: [],
    vehicles: ['https://swapi.dev/api/vehicles/30/'],
    starships: [],
    created: '2014-12-10T15:20:09.791000Z',
    edited: '2014-12-20T21:17:50.315000Z',
    url: 'https://swapi.dev/api/people/5/',
  },
  {
    name: 'Owen Lars',
    height: '178',
    mass: '120',
    hair_color: 'brown, grey',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '52BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/5/',
      'https://swapi.dev/api/films/6/',
    ],
    species: [],
    vehicles: [],
    starships: [],
    created: '2014-12-10T15:52:14.024000Z',
    edited: '2014-12-20T21:17:50.317000Z',
    url: 'https://swapi.dev/api/people/6/',
  },
  {
    name: 'Beru Whitesun lars',
    height: '165',
    mass: '75',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '47BBY',
    gender: 'female',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/5/',
      'https://swapi.dev/api/films/6/',
    ],
    species: [],
    vehicles: [],
    starships: [],
    created: '2014-12-10T15:53:41.121000Z',
    edited: '2014-12-20T21:17:50.319000Z',
    url: 'https://swapi.dev/api/people/7/',
  },
  {
    name: 'R5-D4',
    height: '97',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, red',
    eye_color: 'red',
    birth_year: 'unknown',
    gender: 'n/a',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: ['https://swapi.dev/api/films/1/'],
    species: ['https://swapi.dev/api/species/2/'],
    vehicles: [],
    starships: [],
    created: '2014-12-10T15:57:50.959000Z',
    edited: '2014-12-20T21:17:50.321000Z',
    url: 'https://swapi.dev/api/people/8/',
  },
  {
    name: 'Biggs Darklighter',
    height: '183',
    mass: '84',
    hair_color: 'black',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '24BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: ['https://swapi.dev/api/films/1/'],
    species: [],
    vehicles: [],
    starships: ['https://swapi.dev/api/starships/12/'],
    created: '2014-12-10T15:59:50.509000Z',
    edited: '2014-12-20T21:17:50.323000Z',
    url: 'https://swapi.dev/api/people/9/',
  },
  {
    name: 'Obi-Wan Kenobi',
    height: '182',
    mass: '77',
    hair_color: 'auburn, white',
    skin_color: 'fair',
    eye_color: 'blue-gray',
    birth_year: '57BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/20/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/4/',
      'https://swapi.dev/api/films/5/',
      'https://swapi.dev/api/films/6/',
    ],
    species: [],
    vehicles: ['https://swapi.dev/api/vehicles/38/'],
    starships: [
      'https://swapi.dev/api/starships/48/',
      'https://swapi.dev/api/starships/59/',
      'https://swapi.dev/api/starships/64/',
      'https://swapi.dev/api/starships/65/',
      'https://swapi.dev/api/starships/74/',
    ],
    created: '2014-12-10T16:16:29.192000Z',
    edited: '2014-12-20T21:17:50.325000Z',
    url: 'https://swapi.dev/api/people/10/',
  },
];
console.log(x);

export default {
  name: 'CardStarWars',
  components: {
    UserButton,
  },
  props: {
    character: {
      type: Object,
      require: true,
    },
  },
  computed: {
    changeImage() {
      if (this.character.gender === 'female') {
        return 'icon.starWars';
      }
      if (this.character.gender === 'male') {
        return 'icon-man';
      }
      return 'icon-robot';
    },
    convertHeight() {
      let sm = (this.character.height % 100) !== 0 ? (this.character.height % 100) + 'cm' : '';
      let m = ((this.character.height - (this.character.height % 100)) / 100);
      let res = m !== 0 ? m + 'm' : '';
      return `${res} ${sm}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper-card {
  text-align: start;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 700;
  margin: 24px 12px 0 12px;
  padding: 12px;
  width: 270px;
  height: 330px;
  box-shadow: inset -1px -1px 4px rgba(108, 92, 231, 0.24),
    2px 2px 4px rgba(0, 0, 0, 0.25);
}
.wrapper-char_name {
  margin-bottom: 42px;
}
.image-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #00b894;
}
.name-character {
  padding-top: 8px;
  margin-left: 12px;
}
.descr-character {
  font-weight: 400;
  padding-bottom: 8px;
}
.appearance {
  color: var(--main-color-purple);
  font-weight: 700;
}
.btn-details {
  margin-top: 4px;
}
.gender-female {
  background-color: #e84393;
}
.gender-male {
  background-color: #0984e3;
}
</style>
