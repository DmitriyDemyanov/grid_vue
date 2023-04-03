<template>
  <div>
    <div class="d-flex justify-content-between wrapper-title">
      <div class="title">Star Wars Characters</div>

      <div class="wrapper-input">
        <InputComponent
          placeholder="Whom are you looking for"
          color="black"
          :trackAppendClick="true"
          @onInput="onInputChanged"
        >
          <template v-slot:append-icon>
            <div class="append-icon">
              <img
                :src="require(`@/assets/images/icons/${inputIcon}.svg`)"
                alt="icon"
              />
            </div>
          </template>
        </InputComponent>
      </div>
    </div>
    <div class="error-msg" v-show="getErrorMessage">{{ getErrorMessage }}</div>

    <GlobalLoader v-if="isLoading" />

    <div v-else>
      <div
        class="d-flex flex-wrap wrapper-cords"
        v-if="getFilteredCharacters.length"
      >
        <CardStarWars
          v-for="(character, index) in getFilteredCharacters"
          :key="index"
          :character="character"
        />
      </div>
      <div v-else class="TEST">No character with you search</div>
    </div>
  </div>
</template>

<script>
import InputComponent from '@/components/InputComponent';
import CardStarWars from '@/components/CardStarWars';
import GlobalLoader from '@/components/GlobalLoader';

import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'WhoWeAre',
  components: {
    InputComponent,
    CardStarWars,
    GlobalLoader,
  },
  data() {
    return {
      search: '',
    };
  },
  computed: {
    ...mapGetters('starWars', [
      'getCharacters',
      'isLoading',
      'getErrorMessage',
      'getFilteredCharacters',
    ]),
    inputIcon() {
      if (this.search) {
        return 'icon-x-circle';
      }
      return 'icon-user-gray';
    },
  },
  methods: {
    ...mapActions('starWars', ['fetchStarWarsCharacters']),
    ...mapMutations('starWars', ['SET_SEARCH']),
    onInputChanged(text) {
      this.search = text;
      this.SET_SEARCH(text);
    },
  },
  mounted() {
    if (!this.getCharacters.length) {
      this.fetchStarWarsCharacters();
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper-cords {
  margin: 0 4.5%;
  padding-bottom: 120px;
}
.wrapper-title {
  margin-top: 144px;
  margin-bottom: 24px;
}
.wrapper-input {
  width: 388px;
}
.append-icon {
  position: absolute;
  top: 1px;
  right: 1px;
}
.title {
  font-weight: 700;
  font-size: 32px;
  text-align: start;
}
.error-msg {
  color: red;
  font-size: 40px;
  font-weight: 900;
}
.TEST {
  color: brown;
  font-size: 30px;
  font-weight: 900;
}
</style>
