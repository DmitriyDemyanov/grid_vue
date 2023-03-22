<template>
  <div>
    <div class="d-flex justify-content-between wrap-title">
      <div class="title">Star Wars Characters</div>

      <div class="wrapper-input">
        <InputFooter placeholder="Whom are you looking for">
          <template v-slot:append-icon>
            <div class="append-icon">
              <img src="@/assets/images/icons/icon-user.svg" alt="icon" />
            </div>
          </template>
        </InputFooter>
      </div>
    </div>

    <div class="d-flex flex-wrap justify-content-between">
      <div v-for="(character, index) in getCharters" :key="index">
        <CardStarWars :character="character" />
      </div>
    </div>
  </div>
</template>

<script>
import InputFooter from '@/components/InputFooter';
import CardStarWars from '@/components/CardStarWars';
import { mapGetters } from 'vuex';

export default {
  name: 'WhoWeAre',
  components: {
    InputFooter,
    CardStarWars,
  },
  computed: {
    ...mapGetters('starWars', ['getCharters']),
  },
};
</script>

<style lang="scss" scoped>
.wrap-title {
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
</style>
