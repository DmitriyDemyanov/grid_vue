<template>
  <header class="nav d-flex justify-content-between align-items-center">
    <div class="wrapper-logo d-flex align-items-center">
      <div class="logo-img">
        <img src="@/assets/images/logo.svg" alt="logo" />
      </div>
      <div class="logo-text">Grid</div>
    </div>
    <div class="wrapper-link d-flex justify-content-between align-items-center">
      <LinkHeader title="How it works" />
      <div class="circle"></div>
      <LinkHeader title="Who we are" />
      <div class="circle"></div>
      <LinkHeader title="What we do" />
      <div class="circle"></div>
      <LinkHeader title="Contact us" />
    </div>

    <MainButton title="sign in" size="medium" />
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
};
</script>

<style lang="scss" scoped>
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

.nav {
  height: 162px;
}
.wrapper-link {
  width: 630px;
}
.circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--main-color-orange);
}
</style>
