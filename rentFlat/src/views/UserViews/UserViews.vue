<template>
  <v-row>
    <v-col cols="12" lg="4" md="5" sm="5">
<user-details-information />
    </v-col>
    <v-col cols="12" lg="8" md="7" sm="7">
      <rent-informatios />
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>

import UserDetailsInformation from "@/components/UserDetailsInformation/UserDetailsInformation.vue";
import RentInformatios from "@/components/RentInformations/RentInformatios.vue";
</script>

<style scoped>

</style>
