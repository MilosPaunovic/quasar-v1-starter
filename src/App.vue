<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { MODE_SERVICE } from 'src/services/mode';

export default {
  name: 'ExampleName',
  methods: {
    setMode() {
      const current = MODE_SERVICE.getMode();
      this.$q.dark.set(current === 'dark');
    },
  },
  created() {
    this.setMode();
  },
};
</script>
