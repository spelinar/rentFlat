<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Open Dialog
        </v-btn>
      </template>

      <v-card width="200px">
          <v-list>
            <v-list-item @click="polska(); dialog = false">
              <v-avatar size="30" class="mr-3">
                <v-img :src="plFlag" />
              </v-avatar>
              Polska
            </v-list-item>
            <v-list-item @click="english(); dialog = false">
              <v-avatar size="30" class="mr-3">
                <v-img :src="enFlag" />
              </v-avatar>
              English
            </v-list-item>
          </v-list>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import {useI18n} from "vue-i18n";
import {ref} from "vue";
import polangFlag from '@/components/LangSelector/assets/poland_flag.svg'
import englishFlag from '@/components/LangSelector/assets/united_kingdom_flag.svg'

// Internationalization (i18n)
const { locale} = useI18n()
function polska() {
  locale.value = 'pl'
}
function english() {
  locale.value = 'en'
}
//icons language
const plFlag = polangFlag;
const enFlag = englishFlag

const dialog = ref(false)
</script>

<style scoped>

</style>

