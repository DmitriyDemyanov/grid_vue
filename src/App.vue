<template>
  <div class="app">
    <MainHeader />

    <div class="container">
      <router-view class="main-view"></router-view>
      <SectionFooter />
      <ModalSignIn />
    </div>

    <div class="bg-bottom"></div>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader';

import SectionFooter from '@/components/SectionFooter';
import ModalSignIn from '@/components/ModalSignIn';

export default {
  name: 'App',
  components: {
    MainHeader,
    SectionFooter,
    ModalSignIn,
  },
};
</script>

<style lang="scss">
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

.bg-bottom {
  width: 100%;
  height: 100px;
  background-image: url(@/assets/images/Wave.png);
}

.svg-button-container {
  svg {
    stroke: #5c5c5c;
  }
}
.svg-button-container:hover {
  svg {
    stroke: #fff;
  }
}
</style>
