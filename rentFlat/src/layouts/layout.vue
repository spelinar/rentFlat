<template>
  <v-app>
    <v-app-bar
      color="#6A5ACD"
      prominent
    >
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Wynajem</v-toolbar-title>
      <v-menu width="100px" v-if="mobile">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" variant="text">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <toggle-theme/>
          </v-list-item>
          <v-list-item>
            <lang-selector-dialog/>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-row class="d-flex justify-end mr-7">
        <toggle-theme/>
        <change-lang/>
        <v-btn @click="goToLogin" variant="text" icon="mdi-login"/>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer
      color="#F7F7F9"
      v-model="drawer"
      floating
      permanent
    >
      <v-list-item
        prepend-avatar="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRoT6NNDUONDQmlthWrqIi_frTjsjQT4UZtsJsuxqxLiaFGNl5s3_pBIVxS6-VsFUP_"
        title="User"
      ></v-list-item>
      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item @click="goToHome" prepend-icon="mdi-view-dashboard" title="Home"
                     value="user-page"></v-list-item>
        <v-list-item @click="goToUserPage" prepend-icon="mdi-forum" title="User page" value="about"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="background">
      <div class="ma-10">
        <router-view/>
      </div>
    </v-main>
    <app-footer-component class="app-footer"/>

  </v-app>
</template>

<script lang="ts" setup>

import {ref} from "vue";
import ToggleTheme from "@/components/ToggleTheme/ToggleTheme.vue";
import router from "@/router";
import ChangeLang from "@/components/LangSelector/ChangeLang.vue";
import LangSelectorDialog from "@/components/LangSelector/LangSelectorDialog.vue";
import AppFooterComponent from "@/components/AppFooterComponent/AppFooterComponent.vue";
import {useDisplay} from "vuetify";

const drawer = ref(false)

function goToLogin() {
  router.push({path: '/login'})
}

function goToHome() {
  router.push({path: '/home'})
}

function goToUserPage() {
  router.push({path: '/user-page'})
}

const {mobile} = useDisplay()

</script>

<style scoped>

</style>
