<template>
  <q-header bordered :class="modeClasses({ prefix: 'bg', invert: true })">
    <q-toolbar>
      <Button
        v-if="$q.screen.lt.md"
        aria-label="Open mobile menu"
        @click="updateMobileMenu(true)"
        :icon="icons.menu"
        :color="modeClasses()"
        flat
        data-cy="header-mobile-menu-open-button"
      />
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

      <template v-if="$q.screen.gt.sm">
        <Link
          v-for="(link, index) in links.filter((link) => !link.onlyMobile)"
          :key="index"
          :link="link"
        />

        <q-space />

        <ModeToggle v-if="$route.name !== 'Settings'" />
        <Button
          aria-label="Settings link"
          :to="{ name: 'Settings' }"
          :icon="icons.settings"
          flat
          :color="this.$route.name === 'Settings' ? 'primary' : modeClasses()"
          data-cy="header-settings-link"
        >
          <q-tooltip>Settings</q-tooltip>
        </Button>
        <Button
          aria-label="Logout"
          @click="logout"
          :loading="isLoading"
          :icon="icons.logout"
          flat
          :color="modeClasses()"
          data-cy="header-logout-button"
        >
          <q-tooltip>Logout</q-tooltip>
        </Button>
      </template>
    </q-toolbar>
  </q-header>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import { matMenu, matSettings, matLogout } from '@quasar/extras/material-icons';
import { version } from 'app/package.json';

export default {
  name: 'DesktopHeader',
  components: {
    Link: () => import('components/navigation/desktop/Link'),
    ModeToggle: () => import('components/shared/ModeToggle'),
  },
  data: () => ({
    icons: { menu: undefined, settings: undefined, logout: undefined },
  }),
  computed: {
    ...mapState({
      isLoading: (state) => state.auth.isLoading,
      links: (state) => state.global.links,
    }),
    debbuging: () => process.env.DEBUGGING,
    badge: () => `v${version}`,
  },
  methods: {
    ...mapMutations({ updateMobileMenu: 'global/UPDATE_MOBILE_MENU' }),
    ...mapActions({ logout: 'auth/logout' }),
  },
  created() {
    this.icons.menu = matMenu;
    this.icons.settings = matSettings;
    this.icons.logout = matLogout;
  },
};
</script>
