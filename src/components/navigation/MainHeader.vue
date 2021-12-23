<template>
  <q-header bordered class="bg-white">
    <q-toolbar class="text-dark">
      <q-toolbar-title
        shrink
        :class="{
          'q-ml-xl': $q.screen.gt.sm,
          'absolute-center': $q.screen.lt.md,
        }"
        class="cursor-pointer"
      >
        <router-link :to="{ name: 'Home' }">
          <q-avatar square>
            <img
              src="~assets/images/logo.png"
              alt="Logo"
              width="38"
              height="38"
            />
          </q-avatar>
        </router-link>
        <q-badge v-if="debbuging" :label="badge" align="top" />
      </q-toolbar-title>

      <q-space />

      <Button
        @click="logout"
        :loading="isLoading"
        :icon="icons.logout"
        flat
        data-cy="header__logout_button"
      >
        <q-tooltip>Logout</q-tooltip>
      </Button>
    </q-toolbar>
  </q-header>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { matLogout } from '@quasar/extras/material-icons';
import { version } from 'app/package.json';

export default {
  name: 'DesktopHeader',
  data: () => ({ icons: { logout: undefined } }),
  computed: {
    ...mapState({ isLoading: (state) => state.auth.isLoading }),
    debbuging: () => process.env.DEBUGGING,
    badge: () => `v${version}`,
  },
  methods: {
    ...mapActions({ logout: 'auth/logout' }),
  },
  created() {
    this.icons.logout = matLogout;
  },
};
</script>
