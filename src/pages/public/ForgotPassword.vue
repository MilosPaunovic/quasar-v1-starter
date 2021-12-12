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
      @keypress.enter="forgotPassword(email)"
      label="Email"
      class="q-pb-lg"
      data-cy="forgot_password_email"
    />
    <div class="row justify-between">
      <div class="col-6">
        <router-link
          :to="{ name: 'Login' }"
          class="cursor-pointer text-primary"
          data-cy="login_redirect"
        >
          <span>Have credentials?</span>
        </router-link>
      </div>
      <div class="col-6 text-right">
        <Button
          @click="forgotPassword(email)"
          :loading="isLoading"
          label="Reset"
          data-cy="forgot_password_button"
        />
      </div>
    </div>
  </q-form>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ForgotPassword',
  data: () => ({ email: undefined }),
  computed: {
    ...mapState({ isLoading: (state) => state.auth.isLoading }),
  },
  methods: {
    ...mapActions({ forgotPassword: 'auth/forgotPassword' }),
  },
};
</script>
