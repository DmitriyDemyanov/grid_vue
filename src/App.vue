<template>
  <div>
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

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
.container {
  margin: 0 auto;
  width: 1170px;
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
