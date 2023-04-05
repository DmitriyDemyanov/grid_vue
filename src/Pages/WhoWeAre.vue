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
      <div v-else class="no-character">No character with you search</div>
    </div>
    <div
      class="wrapper-btn-pg d-flex justify-content-center align-items-center"
    >
      <UserButton
        text="prev"
        size="small"
        :disabled="getLinkPrevious && !isLoading ? '' : 'disabled'"
        @onClick="onPaginationClick('prev')"
      >
        <template v-slot:prepend-icon>
          <div class="prepend-chevron">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 13L1 7L7 1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </template>
      </UserButton>

      <div class="number-page">{{ getNumberPage }}</div>

      <UserButton
        text="next"
        size="small"
        :disabled="getLinkNext && !isLoading ? '' : 'disabled'"
        @onClick="onPaginationClick('next')"
      >
        <template v-slot:append-icon>
          <div class="append-chevron">
            <svg
              class="color-svg"
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 13L7 7L1 1"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </template>
      </UserButton>
    </div>
  </div>
</template>

<script>
import InputComponent from '@/components/InputComponent';
import CardStarWars from '@/components/CardStarWars';
import GlobalLoader from '@/components/GlobalLoader';
import UserButton from '@/components/UserButton';

import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'WhoWeAre',
  components: {
    InputComponent,
    CardStarWars,
    GlobalLoader,
    UserButton,
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
      'getLinkPrevious',
      'getLinkNext',
    ]),
    inputIcon() {
      if (this.search) {
        return 'icon-x-circle';
      }
      return 'icon-user-gray';
    },
    getNumberPage() {
      if (this.getLinkNext === null && this.getLinkPrevious === null) {
        return 1;
      }
      if (this.getLinkNext === null && this.getLinkPrevious !== null) {
        return this.getLinkPrevious[this.getLinkPrevious.length - 1] * 1 + 1;
      }

      return this.getLinkNext[this.getLinkNext.length - 1] - 1;
    },
  },
  methods: {
    ...mapActions('starWars', ['fetchStarWarsCharacters']),
    ...mapMutations('starWars', ['SET_SEARCH']),
    onInputChanged(text) {
      this.search = text;
      this.SET_SEARCH(text);
    },
    onPaginationClick(direction) {
      if (direction === 'prev' && this.getLinkPrevious) {
        this.fetchStarWarsCharacters(this.getLinkPrevious);
      }
      if (direction === 'next' && this.getLinkNext) {
        this.fetchStarWarsCharacters(this.getLinkNext);
      }
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
  padding-bottom: 50px; //padding-bottom: 120px;
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
  top: 50%;
  transform: translateY(-50%);
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
.no-character {
  color: brown;
  font-size: 30px;
  font-weight: 900;
}
.wrapper-btn-pg {
  width: 316px;
  margin: 0 auto;
}
.prepend-chevron {
  margin-right: 21px;
}
.append-chevron {
  margin-left: 21px;
}

.number-page {
  width: 40px;
  height: 40px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--main-color-orange);
  color: #000;
  font-size: 20px;
}
</style>

1 save a store .... JSON.String........
local store..
