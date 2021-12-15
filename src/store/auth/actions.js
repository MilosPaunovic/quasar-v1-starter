import * as Sentry from '@sentry/browser';
import AUTH_API from 'src/api/auth';

export function login({ commit }, credentials) {
  commit('UPDATE_LOADING', true);
  return AUTH_API.login(credentials)
    .then((response) => {
      if (response.status !== 200) return;

      commit('SAVE_USER', response.data);
      Sentry.setUser({ email: response.data.email });
      this.$router.push({ name: 'Home' });
    })
    .catch((err) => err)
    .finally(() => commit('UPDATE_LOADING', false));
}

export function register({ commit }, data) {
  commit('UPDATE_LOADING', true);
  return AUTH_API.register(data)
    .then((response) => {
      if (response.status !== 201) return;

      this.$router.push({ name: 'Login' });
    })
    .catch((err) => err)
    .finally(() => commit('UPDATE_LOADING', false));
}

export function forgotPassword({ commit }, email) {
  commit('UPDATE_LOADING', true);
  return AUTH_API.forgotPassword(email)
    .then((response) => {
      if (response.status !== 200) return;

      this.$router.push({ name: 'Login' });
    })
    .catch((err) => err)
    .finally(() => commit('UPDATE_LOADING', false));
}

export function logout({ commit }) {
  commit('UPDATE_LOADING', true);
  AUTH_API.logout()
    .then((response) => {
      if (response.status !== 200) return;

      commit('REMOVE_USER');
      Sentry.configureScope((scope) => scope.setUser(undefined));
      this.$router.push({ name: 'Login' });
    })
    .catch((err) => err)
    .finally(() => commit('UPDATE_LOADING', false));
}
