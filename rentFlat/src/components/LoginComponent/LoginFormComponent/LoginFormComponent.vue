<template>
  <v-sheet max-width="500" class="mx-auto">
    <v-card-title class="text-center"><h1>{{$t('loginTitle')}}</h1></v-card-title>
    <v-img width="100px" class="imageHome" :src="HomeVectorImage"></v-img>
    <v-form fast-fail @submit.prevent>
      <v-text-field
        label="email"
        :rules="rules.ruleEmail"
      ></v-text-field>

      <v-text-field
        label="Last name"
        :rules="rules.rulePassword"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script lang="ts" setup>
import HomeIcon from '@/assets/LoginPanel/vector-home-image.png'
const HomeVectorImage = HomeIcon

const rules = {
  ruleEmail: [
    (v: any) => !!v || 'Emails is requred',
    (v: any) => /.+@.+\..+/.test(v) || 'Email must be correct'
  ],
  rulePassword: [
    (v: any) => !!v || 'Password is requred',
    (v: any) => (v && v.length > 7) || 'Password must contain at least 8 characters '
  ]
}
</script>

<style lang="scss" scoped>
</style>
