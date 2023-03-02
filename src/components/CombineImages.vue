<template>
  <div>
    <div class="title-main">
      Combine <span class="color-main">fine</span> images
    </div>
    <div class="subtitle-main">To represent a product</div>

    <div class="wrapper-photos d-flex">
      <div class="box-1">
        <div class="box-1_text">
          Use mixed grid with imagery, replace with your own photos and
          descriptions
        </div>
        <div class="photo-1_title">
          We aimed to deliver HQ templates for Figma
          <span class="photo-1_subtitle">Used by 123 people</span>
        </div>
        <MainButton title="Learn more" size="big" />
      </div>
      <div class="box-2">
        <div class="cover-1 d-flex">
          <div class="photo-2">Consider it done!</div>
          <div class="box-2_wrap d-flex align-items-end">
            <div>
              <div class="box-2_text">
                This is multipurpose grid, it fits for<br />
                portfolio, services or agency web site
              </div>
              <div class="d-flex">
                <div class="photo-3"></div>
                <div class="photo-4"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="cover-2 d-flex">
          <div class="photo-5"></div>
          <div class="photo-6">See my goal?</div>
          <div class="photo-7"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainButton from './MainButton';
export default {
  name: 'CombineImages',
  components: {
    MainButton,
  },
};
</script>

<style lang="scss" scoped>
.title-main {
  margin-top: 80px;
  font-weight: 800;
  font-size: 96px;
  line-height: 104px;
  text-align: center;
  color: var(--main-font-color);
  text-shadow: 0px 4px 0px #ffffff;
}
.color-main {
  color: #d63031;
  position: relative;
  text-shadow: 0px 4px 0px #ffffff;
}
.color-main::before {
  content: '';
  position: absolute;
  bottom: -3px;
  z-index: -2;
  width: 191px;
  height: 51px;
  background-color: #55efc4;
  border-radius: 999px;
}

.subtitle-main {
  font-weight: 900;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  color: var(--main-font-color);
  margin-bottom: 64px;
}
.wrapper-photos {
  width: 100%;
  height: 100%;
  justify-content: center;
}

.box-1 {
  width: calc(23% - 30px);
  margin-right: 30px;
}
.box-1_text {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: var(--main-font-color);
  margin-bottom: 16px;
  text-align: start;
}
.photo-1_title {
  background-image: url('@/assets/images/photo/Image-1.png');
  border-radius: 20px;
  width: 100%;
  height: 464px;
  padding: 40px 30px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
}
.photo-1_subtitle {
  font-weight: 400;
  font-size: 16px;
}

.box-2 {
  width: calc(75% - 60ppx);
}
.box-2_text {
  width: 370px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 20px;
  color: var(--main-font-color);
  text-align: start;
}
.box-2_wrap {
  margin-left: 30px;
}
.photo-2 {
  width: 470px;
  height: 380px;
  background-image: url('@/assets/images/photo/Image-2.png');
  border-radius: 20px;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: #fff;
  text-shadow: 0px 4px 0px #000000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 16px;
}
.photo-3 {
  width: 170px;
  height: 222px;

  background-image: url('@/assets/images/photo/Image-3.png');
  border-radius: 20px;
}
.photo-4 {
  width: 170px;
  height: 222px;
  margin-left: 30px;
  background-image: url('@/assets/images/photo/Image-4.png');
  border-radius: 20px;
}
.cover-2 {
  margin-top: 30px;
}
.photo-5 {
  width: 270px;
  height: 284px;
  border-radius: 20px;
  background-image: url('@/assets/images/photo/Image-5.png');
}
.photo-6 {
  width: 370px;
  height: 356px;
  margin: 0 30px;
  border-radius: 20px;
  background-image: url('@/assets/images/photo/Image-6.png');
  font-weight: 700;
  font-size: 48px;
  color: #ffffff;
  text-align: center;
  text-shadow: 0px 4px 0px #000000;
}
.photo-7 {
  width: 170px;
  height: 222px;
  border-radius: 20px;
  background-image: url('@/assets/images/photo/Image-7.png');
}
</style>
