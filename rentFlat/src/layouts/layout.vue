<template>
  <v-app>
    <v-app-bar
      color="#6A5ACD"
      prominent
    >
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{$t('layout.title')}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu width="100px">
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
      temporary
    >
      <v-list-item
        prepend-avatar="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRoT6NNDUONDQmlthWrqIi_frTjsjQT4UZtsJsuxqxLiaFGNl5s3_pBIVxS6-VsFUP_"
        title="User"
      ></v-list-item>
      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container style="max-width: 1280px" class="px-0">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>

import {ref} from "vue";
import ToggleTheme from "@/components/ToggleTheme/ToggleTheme.vue";
import router from "@/router";
import ChangeLang from "@/components/LangSelector/ChangeLang.vue";
import LangSelectorDialog from "@/components/LangSelector/LangSelectorDialog.vue";

const drawer = ref(false)

function goToLogin() {
  router.push({path: '/login'})
}

</script>

<style scoped>

</style>
