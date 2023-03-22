<template>
  <div class="wrapper-item">
    <div
      class="icon d-flex align-items-center justify-content-center"
      :style="`background-color:${bg}`"
    >
      <img :src="require(`@/assets/images/icons/${img}.svg`)" alt="icon" />
    </div>
    <div class="item-title">{{ title }}</div>
    <div class="item-text">
      {{ text }}
    </div>
    <UserButton />
  </div>
</template>

<script>
import UserButton from './UserButton';
export default {
  name: 'DeliveryItem',
  components: {
    UserButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    bg: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper-item {
  width: 270px;
  text-align: start;
}
.icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: purple;
  margin-bottom: 24px;
}
.item-title {
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 16px;
}
.item-text {
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 8px;
}
</style>
