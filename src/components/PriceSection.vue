<template>
  <div>
    <div class="price-title">Affordable pricing</div>

    <div class="price-subtitle">
      Bill me <span class="price-word">monthly</span> • yearly
    </div>

    <div class="d-flex justify-content-between wrapper-card-price">
      <CardPrice
        v-for="(item, index) in getCardItems"
        :key="index"
        :title="item.description"
        :price="item.price"
        :currency="item.currency"
        :term="item.term"
        :button="item.button"
        :best="item.best"
        :bg="item.bg"
        :advantages="item.advantages"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CardPrice from './CardPrice';
export default {
  name: 'PriceSection',
  components: {
    CardPrice,
  },
  computed: {
    ...mapGetters('delivery', ['getCardItems']),
  },
};
</script>

<style lang="scss" scoped>
.price-title {
  font-weight: 900;
  font-size: 64px;
  line-height: 77px;
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

.wrapper-card-price {
  padding-bottom: 52px;
}
</style>
