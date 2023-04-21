<template>
<div>
  <v-btn variant="text" icon="mdi-theme-light-dark" @click="toggleTheme">
  </v-btn>
</div>
</template>

<script lang="ts" setup>

import {useTheme} from "vuetify";

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light': 'dark'
}

</script>

<style scoped>

</style>
