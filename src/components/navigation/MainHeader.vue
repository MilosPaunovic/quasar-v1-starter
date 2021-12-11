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
            <img src="~assets/images/logo.png" />
          </q-avatar>
        </router-link>
        <q-badge v-if="debbuging" :label="badge" align="top" />
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script>
import { version } from '../../../package.json';

export default {
  name: 'DesktopHeader',
  computed: {
    debbuging: () => process.env.DEBUGGING,
    badge: () => `v${version}`,
  },
};
</script>
