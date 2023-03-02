<template>
  <div class="delivery-wrapper">
    <div class="delivery-title">
      <img src="@/assets/images/icons/Delivering.png" alt="icons" />
    </div>
    <div class="delivery-subtitle">
      We’re the first multi-purpose design kit solutions for businesses. We help
      you bridge <br />
      gaps between your layouts, templates and developers to empower all
      involved.
    </div>
    

    <div class="d-flex justify-content-between">
      <div v-for="(item, index) in getDeliveryItem" :key="index">
        <DeliveryItem
          :title="item.title"
          :text="item.text"
          :img="item.img"
          :bg="item.bg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DeliveryItem from './DeliveryItem';
import { mapGetters } from 'vuex';
export default {
  name: 'DeliverySection',
  components: {
    DeliveryItem,
  },
  computed: {
    ...mapGetters(['getDeliveryItem']),
  },
};
</script>

<style lang="scss" scoped>
.delivery-wrapper {
  margin-bottom: 154px;
}
.delivery-title {
  margin-top: 160px;
  margin-bottom: 15px;
  text-align: start;
}
.delivery-subtitle {
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 24px;
  text-align: start;
}

</style>
