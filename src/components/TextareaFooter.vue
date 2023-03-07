<template>
  <div class="wrap-textarea">
    <textarea
      style="resize: none"
      class="textarea-footer"
      placeholder="Leave your message|"
    >
    </textarea>
    <slot name="slot-textarea"></slot>
  </div>
</template>

<script>
export default {
  name: 'TextareaFooter',
};
</script>

<style lang="scss" scoped>
.wrap-textarea {
  width: 100%;
  position: relative;
}
.textarea-footer {
  width: 100%;
  background-color: rgba(194, 194, 194, 0.24);
  border: 2px solid rgba(108, 92, 231, 0.24);
  border-radius: 16px;
  padding: 16px 40px 16px 16px;
  font-size: 18px;
  &::placeholder {
    color: var(--main-color-purple);
    font-weight: 700;
    font-size: 18px;
  }
  &:focus {
    outline-color: var(--main-color-purple);
  }
}
</style>
