<template>
  <q-page class="flex flex-center column">
    <span data-cy="error-label-span">Error</span>
    <Button
      :to="{ name: 'Home' }"
      aria-label="Home"
      label="Home"
      class="q-mt-md"
      data-cy="error-home-button-link"
    />
  </q-page>
</template>

<script>
export default {
  name: 'Error',
};
</script>
