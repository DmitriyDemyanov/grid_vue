<template>
  <button class="user-btn d-flex align-items-center justify-content-center">
    Learn more
  </button>
</template>

<script>
export default {
  name: 'UserButton',
};
</script>

<style lang="scss" scoped>
.user-btn {
  width: 146px;
  height: 48px;
  border: 1px solid #adadad;
  background-color: #fff;
  border-radius: 16px;
  font-weight: 700;
  font-size: 18px;
  color: var(--main-color-purple);
  &:hover {
    color: #fff;
    background-color: var(--main-color-purple);
    border: none;
  }
}
</style>
