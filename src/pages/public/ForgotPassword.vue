<template>
  <q-form
    ref="forgotPassword"
    autocorrect="off"
    autocapitalize="off"
    autocomplete="off"
    spellcheck="false"
  >
    <Input
      name="email"
      v-model="email"
      @keypress.enter="submit"
      label="Email"
      lazy-rules
      :rules="[
        (val) => validations.required(val, 'Email'),
        (val) => validations.email(val),
      ]"
      class="q-pt-md"
      data-cy="forgot_password__email"
    />
    <div class="q-pt-lg row justify-between">
      <div class="col-6">
        <router-link
          :to="{ name: 'Login' }"
          class="cursor-pointer text-primary"
          data-cy="forgot_password__login_redirect"
        >
          <span>Have credentials?</span>
        </router-link>
      </div>
      <div class="col-6 text-right">
        <Button
          @click="submit"
          :loading="isLoading"
          label="Reset"
          data-cy="forgot_password__button"
        />
      </div>
    </div>
  </q-form>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { validateRequired, validateEmail } from 'src/services/utils';

export default {
  name: 'ForgotPassword',
  data: () => ({ email: undefined }),
  computed: {
    ...mapState({ isLoading: (state) => state.auth.isLoading }),
    validations() {
      return {
        required: validateRequired,
        email: validateEmail,
      };
    },
  },
  methods: {
    ...mapActions({ forgotPassword: 'auth/forgotPassword' }),
    submit() {
      this.$refs.forgotPassword.validate().then((success) => {
        if (success) this.forgotPassword(this.email);
      });
    },
  },
};
</script>
