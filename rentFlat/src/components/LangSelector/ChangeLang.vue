<template>
<v-btn @click="toggleLanguage">dupa</v-btn>
</template>

<script lang="ts" setup>

import {useI18n} from "vue-i18n";

const { locale} = useI18n()
function toggleLanguage() {
  if (locale.value === 'en') {
    locale.value = 'pl';
  } else {
    locale.value = 'en';
  }
  console.log(locale.value)
}
</script>
<style scoped>
</style>
