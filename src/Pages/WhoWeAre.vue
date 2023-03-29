<template>
  <div>
    <div class="d-flex justify-content-between wrapper-title">
      <div class="title">Star Wars Characters</div>

      <div class="wrapper-input">
        <InputComponent placeholder="Whom are you looking for" color="black">
          <template v-slot:append-icon>
            <div class="append-icon">
              <img src="@/assets/images/icons/icon-user-gray.svg" alt="icon" />
            </div>
          </template>
        </InputComponent>
      </div>
    </div>
    <div class="error-msg" v-show="getErrorMessage">{{ getErrorMessage }}</div>

    <GlobalLoader v-if="isLoading" />

    <div class="d-flex flex-wrap wrapper-cords" v-else>
      <CardStarWars
        v-for="(character, index) in getCharacters"
        :key="index"
        :character="character"
      />
    </div>
  </div>
</template>

<script>
import InputComponent from '@/components/InputComponent';
import CardStarWars from '@/components/CardStarWars';
import GlobalLoader from '@/components/GlobalLoader';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'WhoWeAre',
  components: {
    InputComponent,
    CardStarWars,
    GlobalLoader,
  },
  computed: {
    ...mapGetters('starWars', [
      'getCharacters',
      'isLoading',
      'getErrorMessage',
      'getFilteredCharacters',
    ]),
    myFilteredChar() {
      return this.getFilteredCharacters('male');
    },
  },
  methods: {
    ...mapActions('starWars', ['fetchStarWarsCharacters']),
  },
  mounted() {
    this.fetchStarWarsCharacters();
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
</style>
