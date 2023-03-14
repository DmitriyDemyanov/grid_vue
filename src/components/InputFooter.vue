<template>
  <div class="wrapper-input position-relative">
    <input type="text" :placeholder="`${placeholder}`" />
    <slot name="append-icon"></slot>
  </div>
</template>

<script>
export default {
  name: 'InputFooter',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper-input {
  width: calc(50% - 15px);
}
input {
  width: 100%;
  height: 48px;
  background-color: rgba(194, 194, 194, 0.24);
  border: none;
  border-radius: 16px;
  padding: 8px 40px 8px 16px;
  font-weight: 400;
  font-size: 18px;
  &:focus {
    outline-color: var(--main-color-purple);
  }
  &::placeholder {
    color: var(--main-color-purple);
  }
}
</style>
