<template>
  <q-layout view="hHh lpR fFf">
    <DesktopNavigation />
    <MobileNavigation />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Main',
  components: {
    DesktopNavigation: () => import('components/navigation/desktop/Header'),
    MobileNavigation: () => import('components/navigation/mobile/Menu'),
  },
};
</script>
