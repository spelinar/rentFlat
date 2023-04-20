<template>
  <v-app>
    <v-app-bar
      color="primary"
    >
      <v-row justify="center">
        <v-tabs align-with-title center-active>
          <v-tab>Tab 1</v-tab>

          <v-tab>Tab 2</v-tab>

          <v-tab>Tab 3</v-tab>
        </v-tabs>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-container style="max-width: 1280px" class="px-0">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>
