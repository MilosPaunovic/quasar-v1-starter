<template>
  <q-toggle
    @input="toggleMode"
    v-model="mode"
    :checked-icon="icons.dark"
    true-value="dark"
    :unchecked-icon="icons.light"
    false-value="light"
    :color="modeClasses({ colors: ['primary', 'dark'] })"
    keep-color
    data-cy="dark-mode-toggle"
  />
</template>

<script>
import { MODE_SERVICE } from 'src/services/mode';
import { matDarkMode, matLightMode } from '@quasar/extras/material-icons';

export default {
  name: 'ModeToggle',
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
