<template>
  <div class="app">
    <MainHeader />
    <div class="bg-body">
      <img src="@/assets/images/images_BG.png" alt="bg" />
      <div class="bg-dots">
        <img src="@/assets/images/dots_main.png" alt="" />
      </div>
    </div>
    <div class="container">
      <CombineImages />
    </div>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader';
import CombineImages from './components/CombineImages';
export default {
  name: 'App',
  components: {
    MainHeader,
    CombineImages,
  },
};
</script>

<style>
@import '@/assets/scss/_variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&display=swap');

.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--main-font-color);
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
}
.container {
  margin: 0 auto;
  width: 1170px;
  box-sizing: border-box;
}
.bg-body {
  position: relative;
  position: absolute;
  top: -19px;
  right: 0;
  z-index: -5;
}
.bg-dots {
  position: absolute;
  top: 116px;
  right: 0;
}
</style>

<!-- box-sizing: border-box;? -->
<!-- font-family: 'Inter', sans-serif; -->
<!-- color: var(--main-font-color); -->
