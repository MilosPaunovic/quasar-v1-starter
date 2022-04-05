<template>
  <q-drawer
    v-if="$q.screen.lt.md"
    v-model="mobileMenu"
    side="left"
    class="mobile-menu"
  >
    <Button
      aria-label="Close mobile menu"
      @click="updateMobileMenu(false)"
      :icon="icons.close"
      flat
      :color="modeClasses()"
      data-cy="mobile-menu-close-button"
    />
    <q-list class="row full-width fixed-center">
      <Link
        v-for="(link, index) in links"
        :key="index"
        :to="{ name: link.route }"
        :active="$route.name == link.route"
        :label="link.label"
      />
      <Link label="Logout" @click="logout" />
    </q-list>
  </q-drawer>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import { matClose } from '@quasar/extras/material-icons';

export default {
  name: 'MobileMenu',
  components: { Link: () => import('components/navigation/mobile/Link') },
  data: () => ({ icons: { close: undefined } }),
  computed: {
    ...mapState({
      isShown: (state) => state.global.isMobileMenuShown,
      links: (state) => state.global.links,
    }),
    mobileMenu: {
      get() {
        return this.isShown;
      },
      set(value) {
        this.updateMobileMenu(value);
      },
    },
  },
  methods: {
    ...mapMutations({ updateMobileMenu: 'global/UPDATE_MOBILE_MENU' }),
    ...mapActions({ logout: 'auth/logout' }),
  },
  created() {
    this.icons.close = matClose;
  },
};
</script>

<style lang="scss">
.mobile-menu {
  opacity: 1;

  & .q-btn {
    font-size: 20px;
    position: absolute;
    top: 0;
    right: 0;
  }

  & .q-drawer {
    width: 100% !important;
  }
}
</style>
