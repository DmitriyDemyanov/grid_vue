<template>
  <div>
    <div class="price-title">Affordable pricing</div>

    <div class="price-subtitle">
      Bill me <span class="price-word">monthly</span> • yearly
    </div>
  </div>
</template>

<script>
export default {
  name: 'PriceSection',
};
</script>

<style lang="scss" scoped>
.price-title {
  font-weight: 900;
  font-size: 64px;
}
.price-subtitle {
  font-weight: 700;
  font-size: 32px;
  color: #adadad;
  margin-bottom: 40px;
}
.price-word {
  color: var(--main-color-purple);
  position: relative;
  &::before {
    content: '';
  width: 126px;
  height: 12px;
  position: absolute;
  bottom: 0;
  z-index: -2;
  background: #fdcb6e;
  border-radius: 999px;
  }
}

</style>
