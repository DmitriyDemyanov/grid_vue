<template>
  <div class="card-wrapper">
    <div class="d-flex justify-content-between">
      <div class="card-title">{{ title }}</div>
      <div class="card-best" :class="`best-${visible}`">b e s t !</div>
    </div>
    <div class="card-price">
      {{ currency }}{{ price }}<span class="price-term">{{ term }}</span>
    </div>

    <div class="advantages-wrap d-flex align-items-center">
      <div class="advantages-icon" :style="`background-color:${bg}`">
        <img src="@/assets/images/icons/check.svg" alt="check" />
      </div>
      <div class="advantages-text">Components-driven system</div>
    </div>

    <div class="advantages-wrap d-flex align-items-center">
      <div class="advantages-icon" :style="`background-color:${bg}`">
        <img src="@/assets/images/icons/check.svg" alt="check" />
      </div>
      <div class="advantages-text">Components-driven system</div>
    </div>

    <div class="advantages-wrap d-flex align-items-center">
      <div class="advantages-icon" :style="`background-color:${bg}`">
        <img src="@/assets/images/icons/check.svg" alt="check" />
      </div>
      <div class="advantages-text">Components-driven system</div>
    </div>

    <div class="advantages-wrap d-flex align-items-center">
      <div class="advantages-icon" :style="`background-color:${bg}`">
        <img src="@/assets/images/icons/check.svg" alt="check" />
      </div>
      <div class="advantages-text">Components-driven system</div>
    </div>

    <div class="advantages-wrap d-flex align-items-center">
      <div class="advantages-icon" :style="`background-color:${bg}`">
        <img src="@/assets/images/icons/check.svg" alt="check" />
      </div>
      <div class="advantages-text">Components-driven system</div>
    </div>

    <UserButton :text="button" size="big" />
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
  },
  computed: {
    visibleBest() {
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',this.best)
      if (this.best === true) {
        return 'visible';
      }
      return '';
    },
  },
};
</script>

<style lang="scss" scoped>
.card-wrapper {
  width: 370px;
  padding: 32px;
  &:hover {
    border-radius: 16px;
    box-shadow: 0 9px 12px -8px #a0a5a5;
  }
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
.best-visible {
  display: none;
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
  border-radius: 50%;
  margin-right: 16px;
}
.advantages-text {
  font-weight: 400;
  font-size: 18px;
}
</style>
