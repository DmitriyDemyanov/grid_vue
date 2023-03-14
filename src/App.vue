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
      <DeliverySection />
      <PriceSection />
      <SectionFooter />
      <ModalSignIn />
    </div>
    <div class="bg-bottom"></div>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader';
import CombineImages from './components/CombineImages';
import DeliverySection from './components/DeliverySection';
import PriceSection from './components/PriceSection';
import SectionFooter from './components/SectionFooter';
import ModalSignIn from '@/components/ModalSignIn';


import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    MainHeader,
    CombineImages,
    DeliverySection,
    PriceSection,
    SectionFooter,
    ModalSignIn,
  },
   mounted() {
    this.fetchDelivery();
    this.fetchCardItems();
  },
  methods: {
    ...mapActions('delivery', ['fetchDelivery', 'fetchCardItems']),
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
.bg-bottom {
  width: 100%;
  height: 100px;
  background-image: url(@/assets/images/Wave.png);
}
</style>

<!-- dz/ fixed modal-1 , rename name in password -->
