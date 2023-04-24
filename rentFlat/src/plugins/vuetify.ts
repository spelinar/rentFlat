/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import {createVuetify} from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  locale: {
    locale: 'pl'
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#666cff',
          secondary: '#5CBBF6',
          background: '#F7F7F9',
        },
      },
      dark: {
        colors: {
          background: '#000000'
        }
      }
    },
  },
})
