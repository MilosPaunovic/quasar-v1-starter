<template>
  <q-page class="flex flex-center column">
    <q-list>
      <q-item>
        <q-item-section side>
          <DarkToggle :show-icons="false" />
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
  components: { DarkToggle: () => import('components/navigation/DarkToggle') },
};
</script>
