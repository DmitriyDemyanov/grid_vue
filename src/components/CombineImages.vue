<template>
  <div>
    <div class="title-image">
      <img src="@/assets/images/title_body.svg" alt="title" />
      <div class="bg-title">
        <img src="@/assets/images/bg_title.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CombineImages',
};
</script>

<style lang="scss" scoped>
.title-image {
  position: relative;
  margin-top: 80px;
  text-align: center;
}
.bg-title {
  position: absolute;
  top: 50%;
  right: 39.6%;
  z-index: -2;
}
</style>

<!-- https://html-css-js.com/css/generator/text-shadow/ -->
