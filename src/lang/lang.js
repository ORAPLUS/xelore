import Vue from 'vue'
import VueI18n from 'vue-i18n'

import fr from './src/fr.json'
import en from './src/en.json'
import ar from './src/ar.json'

Vue.use(VueI18n)

const locale = 'fr'

const messages = {
  fr,
  en,
  ar
}

const i18n = new VueI18n({
  locale,
  messages
})

export default i18n
