<template>
  <button
    class="main-btn d-flex align-items-center justify-content-center"
    :class="`${size}-btn`" 
      @click="modal('modal-1')"
    
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    title: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'medium',
    },
  },
   methods: {
    modal(id) {
       this.$bvModal.show(id);
    }
  },
};
</script>

<style scoped>
.main-btn {
  min-height: 64px;
  font-size: 24px;
  text-transform: capitalize;
  color: #fff;
  background-color: var(--main-color-purple);

  border-radius: 999px;
  padding: 8px 32px;
  border: none;
}
.main-btn:hover {
  background-color: var(--main-font-color);
}
.big-btn {
  width: 270px;
  min-height: 82px;
  font-size: 32px;
}
.fat-btn {
  width: 30%;
  height: 100%;
  text-transform: uppercase;
  border-radius: 16px;
  margin-left: 30px;
}
</style>
