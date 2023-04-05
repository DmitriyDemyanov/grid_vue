<template>
  <div>
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
    </div>
  </div>
</template>

<script>
import CombineImages from '@/components/CombineImages';
import DeliverySection from '@/components/DeliverySection';
import PriceSection from '@/components/PriceSection';
import { mapActions } from 'vuex';

export default {
  name: 'HowItWorks',
  components: {
    CombineImages,
    DeliverySection,
    PriceSection,
  },
  methods: {
    ...mapActions('delivery', ['fetchDelivery', 'fetchCardItems']),
  },
  mounted() {
    this.fetchDelivery();
    this.fetchCardItems();
  },
};
</script>

<style lang="scss" scoped>
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
