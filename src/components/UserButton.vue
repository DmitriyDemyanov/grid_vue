<template>
  <button
    class="user-btn d-flex align-items-center justify-content-center svg-button-container"
    :class="`btn-${size} ${disabled}`"
    @click="onClick"
  >
    <slot name="prepend-icon"></slot>
    {{ text }}
    <slot name="append-icon"></slot>
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
    disabled: {
      type: String,
      default: '',
    },
  },
  methods: {
    onClick() {
      if (this.disabled !== 'disabled') {
        this.$emit('onClick');
      }
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
  padding: 0 17px;
  color: var(--main-color-purple);
  text-transform: capitalize;
  &:hover {
    color: #fff;
    background-color: var(--main-color-purple);
    border: none;
  }
}
.btn-big {
  width: 100%;
}
.btn-small {
  width: 100px;
}
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>

// number page!
