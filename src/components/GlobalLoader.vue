<template>
  <div class="wrapper-loader">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: 'GlobalLoader',
};
</script>

<style lang="scss" scoped>
.wrapper-loader {
  padding: 138px 0;
}
.loader {
  width: 100px;
  height: 100px;
  border: 3px solid #6c5ce7;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-bottom-color: #ff3d00;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
