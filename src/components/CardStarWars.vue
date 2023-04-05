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
      hair: <span class="descr-person"> {{ character.hair_color }} </span>
    </div>
    <div class="descr-character">
      skin: <span class="descr-person"> {{ character.skin_color }} </span>
    </div>
    <div class="descr-character">
      eye: <span class="descr-person"> {{ character.eye_color }} </span>
    </div>
    <div class="descr-character">
      height: <span class="descr-person"> {{ convertHeight }} </span>
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
      let sm =
        this.character.height % 100 !== 0
          ? (this.character.height % 100) + 'cm'
          : '';
      let m = (this.character.height - (this.character.height % 100)) / 100;
      let res = m !== 0 ? m + 'm' : '';
      return `${res} ${sm}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper-card {
  text-align: start;

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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.descr-character {
  font-weight: 400;
  padding-bottom: 8px;
  text-transform: capitalize;
}
.descr-person {
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
