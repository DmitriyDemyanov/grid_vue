<template>
  <div class="link-nav d-flex align-items-center">
    <a class="link-text" href="#">{{ title }}</a>
    <div class="circle"></div>
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
  width: 100%;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  text-decoration: none;
}
.link-text:hover {
  font-weight: 700;
  color: var(--main-font-color);
}

</style>
