import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'


Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    options: { customProperties: true },
    dark: false,
    themes: {
      light: {
        // Fill here
      },
      dark: {
        // Fill here
      },
    },
  },
})