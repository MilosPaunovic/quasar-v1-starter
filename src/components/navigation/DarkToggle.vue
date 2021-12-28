<template>
  <q-toggle
    @input="toggleMode"
    v-model="mode"
    :checked-icon="icons.dark"
    true-value="dark"
    :unchecked-icon="icons.light"
    false-value="light"
    :color="$q.dark.isActive ? 'primary' : 'dark'"
    keep-color
  />
</template>

<script>
import { MODE_SERVICE } from 'src/services/mode';
import { matDarkMode, matLightMode } from '@quasar/extras/material-icons';

export default {
  name: 'DarkToggle',
  props: { showIcons: { type: Boolean, default: true } },
  data: () => ({
    mode: undefined,
    icons: { dark: undefined, light: undefined },
  }),
  methods: {
    toggleMode(mode) {
      this.$q.dark.set(mode === 'dark');
      MODE_SERVICE.updateMode(mode);
    },
  },
  created() {
    if (this.showIcons) this.icons = { dark: matDarkMode, light: matLightMode };
    this.mode = MODE_SERVICE.getMode();
  },
};
</script>
