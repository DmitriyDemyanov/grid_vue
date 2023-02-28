<template>
  <div class="link-nav d-flex align-items-center">
    <a class="link-text" href="#">{{ title }}</a>
    
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
</style>
