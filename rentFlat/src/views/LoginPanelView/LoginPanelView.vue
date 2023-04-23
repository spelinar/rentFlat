<template>
<v-container class="mt-16">
  <v-btn
    @click="goBack"
    class="ma-2"
    color="primary"
  >
    <v-icon
      start
      icon="mdi-arrow-left"
    ></v-icon>
    Back
  </v-btn>
  <v-sheet width="300" class="mx-auto mt-16">
    <v-card-title class="text-center">{{$t('loginPanelView.loginTitle')}}</v-card-title>
    <v-row justify="center" align-content="center">
        <div style="width: 150px" class="d-flex align-center justify-center mb-5">
        <v-img :src="VectorIconHome"></v-img>
        </div>
    </v-row>
    <v-form ref="form">
      <v-text-field
        label="Email"
        required
        :rules="rules.rulesEmail"
      ></v-text-field>

      <v-text-field
        label="Password"
        required
        :rules="rules.rulesPassword"
      ></v-text-field>

      <div class="d-flex flex-column">
        <v-btn
          color="primary"
          class="mt-4"
          block
        >
          Submit
        </v-btn>
      </div>
    </v-form>
  </v-sheet>
  <div class="circleLeftBottom"></div>
  <div class="circleLeftTop"></div>
  <div class="circleRightBottom"></div>
</v-container>
  <change-lang />
</template>

<script lang="ts" setup>
import HomeLogo from '@/assets/home-vector-icon.png'
import ChangeLang from "@/components/LangSelector/ChangeLang.vue";

function goBack() {
  window.history.back()
}

const rules = {
  rulesEmail: [
    (v: any) => !!v || 'Email is required',
    (v: any) => (/.+@.+\..+/.test(v)) || 'Enter a valid email'
  ],
  rulesPassword: [
    (v: any) => !!v || 'Password is required',
    (v: any) => (v && v.length > 7) || 'The password must contain at least 8 characters'
  ]
}

const VectorIconHome = HomeLogo

</script>

<style scoped>

@media screen and (max-width: 430px) {

.circleLeftBottom {
  width: 500px;
  height: 170px;
  background: radial-gradient(circle at 10% 20%, rgba(77, 97, 252, 0.63) 0%, rgb(77, 97, 252) 90%);
  border-radius: 50%;
  position: fixed;
  bottom: -100px;
  left: -50px;
}

.circleLeftTop {
  width: 300px;
  height: 300px;
  background: linear-gradient(135.9deg, rgb(109, 25, 252) 16.4%, rgb(125, 31, 165) 56.1%);
  border-radius: 50%;
  position: fixed;
  top: -230px;
  left: -180px;
}
.circleRightBottom {
  width: 300px;
  height: 300px;
  background: linear-gradient(135.9deg, rgb(109, 25, 252) 16.4%, rgb(125, 31, 165) 56.1%);
  border-radius: 50%;
  position: fixed;
  top: -200px;
  right: -150px;
}
}

</style>
