<template>
  <div class="container">
    <CombineImages />
    <DeliverySection />
    <PriceSection />
  </div>
</template>

<script>
import CombineImages from '@/components/CombineImages';
import DeliverySection from '@/components/DeliverySection';
import PriceSection from '@/components/PriceSection';

export default {
  name: 'HowItWorks',
  components: {
    CombineImages,
    DeliverySection,
    PriceSection,
  },
};
</script>

<style lang="scss" scoped>

</style>
