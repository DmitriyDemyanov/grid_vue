<template>
  <b-modal
    modal-class="modal-sign"
    id="modal-1"
    hide-header-close
    modal-header
    centered
  >
    <div class="modal-title">Please enter your details!</div>
    <div>
      <label class="label-name mt-3" for="input-name">Your Name:</label>
      <input
        id="input-name"
        type="text"
        v-model="form.name"
        placeholder="Enter name"
        required
      />

      <div class="wrap-email">
        <label class="label-email" for="input-email">Your Email:</label>
        <input
          id="input-email"
          type="text"
          v-model="form.email"
          placeholder="Enter name"
          required
        />
      </div>
    </div>
    <div class="wrapper-btn d-flex justify-content-between">
      <button class="cancel-btn btn">cancel</button>
      <button class="sign-in-btn btn">sign in</button>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'ModalSignIn',
  data() {
    return {
      form: {
        name: '',
        email: '',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep .modal-sign {
  .modal-header,
  .modal-footer {
    display: none;
  }
  .modal-title {
    color: var(--main-color-purple);
    font-size: 30px;
    text-align: center;
  }
}
.wrapper-btn {
  width: 100%;
  height: 50px;
  margin: 20px 0;
}

.btn {
  width: calc(50% - 15px);
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cancel-btn {
  border-radius: 20px;
  border: solid 3px var(--main-color-orange);
  &:hover {
    background-color: var(--main-color-orange);
  }
}
.sign-in-btn {
  border-radius: 20px;
  border: solid 3px var(--main-color-purple);
  &:hover {
    background-color: var(--main-color-purple);
  }
}
.wrap-email {
  margin-top: 20px;
}
input {
  width: 100%;
  height: 48px;
  background-color: rgba(194, 194, 194, 0.24);
  border: none;
  border-radius: 16px;
  padding: 8px 40px 8px 16px;
  font-weight: 400;
  font-size: 18px;
  &:focus {
    outline-color: var(--main-color-purple);
  }
}
</style>

<!-- v-model="form.name"
        placeholder="Enter name"
        required -->
