<template>
  <header class="nav">
    <div class="container d-flex justify-content-between align-items-center">
      <a href="/">
        <div class="wrapper-logo d-flex align-items-center">
          <div class="logo-img">
            <img src="@/assets/images/logo.svg" alt="logo" />
          </div>
          <div class="logo-text">Grid</div>
        </div>
      </a>

      <div
        class="wrapper-link d-flex justify-content-between align-items-center"
      >
        <LinkHeader
          route="/"
          title="How it works"
          :pathName="this.$route.name === 'home'"
        />
        <div class="circle"></div>
        <LinkHeader
          route="/who-we-are"
          title="Who we are"
          :pathName="this.$route.name === 'WhoWeAre'"
        />
        <div class="circle"></div>
        <LinkHeader title="What we do" />
        <div class="circle"></div>
        <LinkHeader title="Contact us" />
      </div>
      <div class="wrap-main-btn">
        <MainButton title="sign in" size="medium" @click="showSignIn" />
      </div>
    </div>
  </header>
</template>

<script>
import MainButton from '@/components/MainButton';
import LinkHeader from '@/components/LinkHeader';

export default {
  name: 'MainHeader',
  components: {
    MainButton,
    LinkHeader,
  },
  mounted() {
    console.log('====', this.$route);
  },
  computed: {
    pathName() {
      if (this.$route.name === 'home') {
        return 'black';
      }
      if (this.$route.name === 'WhoWeAre') {
        return 'green';
      }
      return '';
    },
  },
  methods: {
    showSignIn() {
      this.$bvModal.show('modal-1');
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.nav {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 2;
  height: 96px;
  border-bottom: 5px solid;
  border-image: linear-gradient(to bottom, #a0a5a5, #ffffff) 50% 0%;
  background-color: #fff;
}
.logo-img {
  width: 70px;
  height: 64px;
  img {
    width: 100%;
    height: 100%;
  }
}
.logo-text {
  font-weight: 700;
  font-size: 48px;
  color: var(--main-font-color);
}

.wrapper-link {
  width: 630px;
}
.circle {
  justify-content: center;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--main-color-orange);
}
</style>
