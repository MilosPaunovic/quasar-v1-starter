<template>
  <q-item
    v-bind="$attrs"
    clickable
    @click="$emit('click')"
    exact
    active-class="text-primary"
    class="col-xs-10 offset-xs-1 col-sm-8 offset-sm-2"
    data-cy="mobile-menu-link"
  >
    <q-item-section class="link">{{ label }}</q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'Link',
  props: { label: { type: String, required: true } },
};
</script>

<style lang="scss">
.link {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.7;
  text-align: center;
}
</style>
