import Vue from 'vue';

Vue.mixin({
  methods: {
    modeClasses({ prefix, invert, colors = ['white', 'dark'] } = {}) {
      const light = prefix ? `${prefix}-${colors[0]}` : colors[0];
      const dark = prefix ? `${prefix}-${colors[1]}` : colors[1];

      if (invert) return this.$q.dark.isActive ? dark : light;
      return this.$q.dark.isActive ? light : dark;
    },
  },
});
