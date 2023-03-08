<template>
  <b-modal id="modal-1">
    <div>
      <label class="label-name mt-3" for="input-name">Your Name:</label>
      <input
        id="input-name"
        type="text"
        v-model="form.name"
        placeholder="Enter name"
        required
      />

      <div>
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
