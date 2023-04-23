import {createI18n} from "vue-i18n";
import pl from "@/lang/pl";
import en from '@/lang/en'
import axios from "axios";


export const i18n = createI18n({
  legacy: false,
  locale: 'pl',
  fallbackLocale: ['pl', 'en'],
  messages: {pl, en}
})

