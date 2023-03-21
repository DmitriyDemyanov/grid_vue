<template>
  <div class="wrapper-card">
    <div class="image-icon d-flex justify-content-center align-items-center" :style="`background-color: ${user.background}`" >
      <img src="@/assets/images/icons/icon.starWars.svg" alt="icon" />
    </div>
    <div class="name-character">{{ user.name }}</div>
    <div class="descr-character">
      hair: <span class="appearance"> {{ user.hair }} </span>
    </div>
    <div class="descr-character">
      skin: <span class="appearance"> {{ user.skin }} </span>
    </div>
    <div class="descr-character">
      eye: <span class="appearance"> {{ user.eye }} </span>
    </div>
    <div class="descr-character">
      height: <span class="appearance"> {{ user.height }} </span>
    </div>
    <div class="btn-details">
      <UserButton text="Details" />
    </div>
  </div>
</template>

<script>
import UserButton from '@/components/UserButton';

export default {
  name: 'CardStarWars',
  components: {
    UserButton,
  },
  data() {
    return {
      user: {
        img: '@/assets/images/icons/icon.starWars.svg',
        name: 'Leia Organa',
        hair: 'brown',
        skin: 'light',
        eye: 'brown',
        height: '1m 50cm',
        background: '#E84393',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper-card {
  text-align: start;
  text-transform: capitalize;
}
.image-icon {
  width: 70px;
  height: 70px;
  margin-top: 24px;
  background-color: pink;
  border-radius: 50%;
}
.name-character {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 24px;
}
.descr-character {
  margin-bottom: 12px;
  font-weight: 400;
  font-size: 18px;
}
.appearance {
  font-weight: 700;
  color: var(--main-color-purple);
}
.btn-details {
  margin-top: 4px;
}
</style>
