<template>
  <q-form
    ref="login"
    autocorrect="off"
    autocapitalize="off"
    autocomplete="off"
    spellcheck="false"
  >
    <Input
      name="email"
      v-model="user.email"
      @keypress.enter="login(user)"
      label="Email"
      class="q-pb-lg"
      data-cy="login__email"
    />
    <Input
      name="password"
      v-model="user.password"
      @keypress.enter="login(user)"
      :type="passwordVisible ? 'text' : 'password'"
      label="Password"
      class="q-pb-lg"
      data-cy="login__password"
    >
      <template v-slot:append>
        <q-icon
          @click="passwordVisible = !passwordVisible"
          :name="passwordVisible ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          data-cy="login__password_visibility"
        />
      </template>
    </Input>
    <div class="row justify-between">
      <div class="col-6">
        <div class="row">
          <router-link
            :to="{ name: 'Register' }"
            class="col-12 cursor-pointer text-primary"
            data-cy="login__register_redirect"
          >
            <span>Don't have an account?</span>
          </router-link>
          <router-link
            :to="{ name: 'ForgotPassword' }"
            class="col-12 cursor-pointer text-primary"
            data-cy="login__forgot_password_redirect"
          >
            <span>Forgot password?</span>
          </router-link>
        </div>
      </div>
      <div class="col-6 text-right">
        <Button
          @click="login(user)"
          :loading="isLoading"
          label="Log in"
          data-cy="login__button"
        />
      </div>
    </div>
  </q-form>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Login',
  data: () => ({
    user: { email: undefined, password: undefined },
    passwordVisible: false,
  }),
  computed: {
    ...mapState({ isLoading: (state) => state.auth.isLoading }),
  },
  methods: {
    ...mapActions({ login: 'auth/login' }),
  },
};
</script>
