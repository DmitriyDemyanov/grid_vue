<template>
  <button
    class="user-btn d-flex align-items-center justify-content-center"
    :class="`btn-${size}`"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'UserButton',
  props: {
    text: {
      type: String,
      default: 'Learn more',
    },
    size: {
      type: String,
      default: '',
    },
  },
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
.btn-big {
  width: 100%;
}
</style>
