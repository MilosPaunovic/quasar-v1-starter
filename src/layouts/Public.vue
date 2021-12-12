<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page class="flex flex-center">
        <div class="row full-width">
          <div
            class="
              col-xs-10
              offset-xs-1
              col-sm-6
              offset-sm-3
              col-md-4
              offset-md-4
            "
          >
            <router-view />
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Public',
};
</script>
