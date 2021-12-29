<template>
  <q-btn
    :to="{ name: link.route }"
    :label="link.label"
    flat
    :class="compClasses"
  />
</template>

<script>
export default {
  name: 'Link',
  props: { link: { type: Object, required: true } },
  computed: {
    compClasses() {
      return this.$route.name === this.link.route
        ? ['text-primary']
        : [this.modeClasses({ prefix: 'text' })];
    },
  },
};
</script>
