<template>
  <q-layout view="hHh lpR fFf">
    <MainHeader />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Main',
  components: {
    MainHeader: () => import('../components/navigation/MainHeader'),
  },
};
</script>
