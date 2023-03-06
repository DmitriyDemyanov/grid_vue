<template>
  <div class="position-relative order-card">
    <div class="card-bg">
      <img src="@/assets/images/wiggle.svg" alt="" />
    </div>
    <div class="card-wrapper">
      <div>
        <div class="d-flex justify-content-between">
          <div class="card-title">{{ title }}</div>
          <div v-if="best" class="card-best">b e s t !</div>
        </div>
        <div class="card-price">
          {{ currency }}{{ price }}<span class="price-term">{{ term }}</span>
        </div>

        <div
          class="advantages-wrap d-flex align-items-center"
          v-for="(el, ind) in advantages"
          :key="ind"
        >
          <div class="advantages-icon" :style="`background-color:${bg}`">
            <img src="@/assets/images/icons/check.svg" alt="check" />
          </div>
          <div class="advantages-text">{{ el }}</div>
        </div>
      </div>

      <div class="wrap-user_btn">
        <UserButton :text="button" size="big" />
      </div>
    </div>
  </div>
</template>

<script>
import UserButton from './UserButton';
export default {
  name: 'CardPrice',
  components: {
    UserButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    term: {
      type: String,
      required: true,
    },

    button: {
      type: String,
      required: true,
    },
    bg: {
      type: String,
      required: true,
    },
    best: {
      type: Boolean,
      default: false,
    },
    advantages: {
      type: Array,
      required: true,
    },
  },

};
</script>

<style lang="scss" scoped>
.order-card {
  border-radius: 20px;
  background-color: #fff;
  &:hover {
    box-shadow: 0 9px 12px -8px #a0a5a5;
    .card-bg {
      opacity: 1;
    }
  }
}
.card-bg {
  position: absolute;
  bottom: -30px;
  left: -30px;
  z-index: -3;
  opacity: 0;
  transition: opacity 300ms;
}
.card-bg_none {
  display: none;
}
.card-wrapper {
  width: 370px;
  min-height: 536px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.card-title {
  color: var(--main-color-purple);
  font-weight: 700;
  font-size: 18px;
}
.card-best {
  font-weight: 800;
  font-size: 12px;
  text-transform: uppercase;
  border: 1px solid #6c5ce7;
  border-radius: 99px;
  padding: 8px 20px;
}

.card-price {
  font-weight: 700;
  font-size: 48px;
  text-align: start;
  margin-bottom: 24px;
}
.price-term {
  font-weight: 900;
  font-size: 14px;
  text-transform: uppercase;
}
.advantages-wrap {
  margin-top: 4px;
  margin-bottom: 20px;
}
.advantages-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: #fdcb6e;
  margin-right: 16px;
  border-radius: 50%;
}
.advantages-text {
  font-weight: 400;
  font-size: 18px;
}
</style>
