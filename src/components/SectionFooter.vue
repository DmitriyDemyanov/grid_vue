<template>
  <section class="footer-wrapper d-flex">
    <div class="footer-social">
      <div class="footer-description">follow us</div>
      <div class="social-wrap_icons d-flex">
        <div
          class="social-icon"
          v-for="(img, ind) in getSocialIcons"
          :key="ind"
        >
          <a href="#"
            ><img :src="require(`@/assets/images/icons/${img}.svg`)" alt="icon"
          /></a>
        </div>
      </div>
      <div class="footer-description">information</div>
      <div class="social-wrap_links d-flex">
        <div
          class="social-link"
          v-for="(link, index) in getSocialLinks"
          :key="index"
        >
          <a href="#"> {{ link }} </a>
        </div>
      </div>
    </div>

    <div class="footer-form">
      <div class="footer-description">follow us</div>

      <div class="main-link">
        <a href="#">hello@fapsterapp.com</a>
      </div>
      <div class="footer-description">keep in touch</div>
      <div class="wrapper-form">
        <form>
          <div class="d-flex justify-content-between">
            <InputComponent
              v-for="(item, ind) in getInputPlaceholder"
              :key="ind"
              :placeholder="item.title"
            >
              <template v-slot:append-icon>
                <div class="append-icon">
                  <img
                    :src="require(`@/assets/images/icons/${item.img}.svg`)"
                    alt="icon"
                  />
                </div>
              </template>
            </InputComponent>
          </div>
          <div class="d-flex justify-content-between wrap-form_btn">
            <TextareaFooter>
              <template v-slot:slot-textarea>
                <div class="icon-textarea">
                  <img src="@/assets/images/icons/icon-edit.svg" alt="icon" />
                </div>
              </template>
            </TextareaFooter>
            <MainButton title="send" size="fat" />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import MainButton from './MainButton';
import InputComponent from './InputComponent';
import TextareaFooter from './TextareaFooter';

import { mapGetters } from 'vuex';
export default {
  name: 'SectionFooter',
  components: {
    MainButton,
    InputComponent,
    TextareaFooter,
  },
  computed: {
    ...mapGetters(['getSocialIcons', 'getSocialLinks', 'getInputPlaceholder']),
  },
};
</script>

<style lang="scss" scoped>
.footer-wrapper {
  padding-top: 80px;
}
.footer-social {
  width: calc(50% - 15px);
}
.footer-form {
  width: calc(50% - 15px);
}
.footer-description {
  font-weight: 800;
  font-size: 12px;
  text-transform: uppercase;
  text-align: start;
  color: #adadad;
}
.social-icon {
  width: 40px;
  height: 40px;
  margin-top: 8px;
  margin-bottom: 40px;
  margin-right: 45px;
  border-radius: 50%;
  &:hover {
    background-color: #ffeaa7;
  }
}
.social-wrap_links {
  flex-wrap: wrap;
  margin-bottom: 80px;
}
.social-link {
  width: 170px;
  margin-top: 16px;
  margin-right: 30px;
  font-weight: 400;
  font-size: 14px;
  text-align: start;
  a {
    color: var(--main-font-color);
    text-decoration: none;

    &:hover {
      color: var(--main-color-purple);
      text-decoration: underline;
    }
  }
}
.main-link {
  font-weight: 700;
  font-size: 32px;
  text-align: start;
  color: var(--main-color-purple);
  margin-bottom: 48px;
  & a {
    color: var(--main-color-purple);
    text-decoration: none;
    &:hover {
      color: var(--main-font-color);
      text-decoration: underline;
    }
  }
}
.wrapper-form {
  margin-top: 16px;
}

.wrap-form_btn {
  height: 80px;
  margin-top: 30px;
  margin-bottom: 43px;
}

.append-icon {
  position: absolute;
  top: 1px;
  right: 1px;
}
.icon-textarea {
  position: absolute;
  top: 1px;
  right: 1px;
}
</style>
