<template>
  <v-app>
    <v-app-bar
      color="#6A5ACD"
      prominent
    >
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title mobile-breakpoint="580">dupa</v-toolbar-title>
      <v-menu width="100px" v-if="mobile">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" variant="text" icon="mdi-dots-vertical" />
        </template>
        <v-list>
          <v-list-item>
            <toggle-theme />
          </v-list-item>
          <v-list-item>
            <lang-selector-dialog />
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn @click="goToLogin" variant="text" icon="mdi-login" />

    </v-app-bar>

    <v-navigation-drawer
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
        <v-list-item @click="goToUserPage" prepend-icon="mdi-view-dashboard" title="Home" value="user-page"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <div class="ma-10">
        <router-view />
      </div>
    </v-main>
    <app-footer-component />

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
function goToUserPage() {
  router.push({path: '/user-page'})
}

const {mobile} = useDisplay()

</script>

<style scoped>

</style>
