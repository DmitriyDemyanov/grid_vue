<template>
  <div class="link-nav d-flex align-items-center">
    <router-link class="link-text" :class="{ active: pathName }" :to="route">
      {{ title }} {{ pathName }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LinkHeader',

  props: {
    title: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      default: '',
    },
    pathName: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.link-text {
  width: 120px;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  text-decoration: none;
  text-align: center;
}
.link-text:hover {
  font-weight: 700;
  color: var(--main-font-color);
}
.active {
  color: var(--main-font-color);
  font-weight: 700;
}
</style>
