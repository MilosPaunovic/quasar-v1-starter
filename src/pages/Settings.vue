<template>
  <q-page class="flex flex-center column">
    <q-list class="row full-width">
      <q-item
        class="
          col-xs-10
          offset-xs-1
          col-sm-8
          offset-sm-2
          col-md-6
          offset-md-3
          col-lg-4
          offset-lg-4
        "
      >
        <q-item-section side>
          <ModeToggle :show-icons="false" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Dark theme</q-item-label>
          <q-item-label caption>
            Enable dark theme throuhout the application.
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'Settings',
  components: { ModeToggle: () => import('components/shared/ModeToggle') },
};
</script>
