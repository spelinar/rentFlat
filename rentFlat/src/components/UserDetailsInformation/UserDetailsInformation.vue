<template>
  <v-card elevation="6" rounded>
    <v-row justify="center" class="mt-5">
    <v-avatar rounded="1" size="120">
    <v-img width="200px" :src="UserAvatar"></v-img>
    </v-avatar>
    </v-row>
    <v-card-text class="text-center mt-5"><h2>{{userDetails.username}} {{userDetails.surname}}</h2></v-card-text>
    <v-row justify="center">
    <v-chip class="ma-2" color="error">{{userDetails.role}}</v-chip>
    </v-row>
    <v-container>
    <h2>Details</h2>
      <v-divider class="mt-2" />
        <v-list-item class="ma-0" v-for="(key, index) in Object.keys(userDetails)" :key="index">{{key}} : {{userDetails[key]}}</v-list-item>
    </v-container>
    <v-row justify="center" class="pb-5">
      <v-btn class="mr-2" color="primary">Edit</v-btn>
      <v-btn class="ml-2 text-none" variant="outlined" color="error">Suspend</v-btn>
    </v-row>
  </v-card>
</template>

<script lang="ts" setup>
import userAvatar from '@/assets/user-photo.png'

const UserAvatar = userAvatar


const userDetails = {
  username: 'Roman',
  surname: 'Roman',
  email: 'Roman@gmail.com',
  role: 'admin',
  contactNumber: '886412188',
  language: 'Polski',
  country: 'Wrocław'
}

const translationKeyUserDetails = ['Imię uźytkownika', 'Nazwisko', 'Email', 'Numer Kontaktowy', 'Język', 'country'];

</script>

<style scoped>

</style>
