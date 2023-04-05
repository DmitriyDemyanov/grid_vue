<template>
  <div class="wrapper-input position-relative">
    <input
      type="text"
      :class="`color-${color}`"
      :placeholder="`${placeholder}`"
      v-model="input"
      @input="onInput"
    />
    <span @click="onAppendClick">
      <slot name="append-icon"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    trackAppendClick: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      input: '',
    };
  },
  methods: {
    onInput() {
      this.$emit('onInput', this.input);
    },
    onAppendClick() {
      if (this.trackAppendClick) {
        this.input = '';
        this.$emit('onInput', this.input);
      }
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
.color-black {
  &::placeholder {
    color: var(--main-font-color);
  }
  &:focus {
    outline-color: var(--main-font-color);
  }
}
</style>
