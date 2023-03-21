<template>
  <div>
    <div class="wrapper-input">
      <InputFooter placeholder="Whom are you looking for">
        <template v-slot:append-icon>
          <div class="append-icon">
            <img src="@/assets/images/icons/icon-user.svg" alt="icon" />
          </div>
        </template>
      </InputFooter>
    </div>
    <div class="title">Star Wars Characters</div>
    <CardStarWars/>
  </div>
</template>

<script>
import InputFooter from '@/components/InputFooter';
import CardStarWars from '@/components/CardStarWars';

export default {
  name: 'WhoWeAre',
  components: {
    InputFooter,
    CardStarWars,
  },
};
</script>

<style lang="scss" scoped>
.wrapper-input {
  width: 388px;
  margin-top: 136px;
  margin-left: 50px;
}
.append-icon {
  position: absolute;
  top: 1px;
  right: 1px;
}
.title {
  margin-top: 32px;
  font-weight: 700;
  font-size: 32px;
  text-align: start;
}
</style>
