// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
// require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

import Vue from 'vue'
import Quasar from 'quasar'
import Vuelidate from 'vuelidate'
import axios from './common/axios'
import router from './router'
import { store } from './store'

import VueRouter from 'vue-router'
import firebase from 'firebase'
import i18n from './lang/lang'
import 'font-awesome/css/font-awesome.css'
import 'highlight/lib/vendor/highlight.js/styles/default.css'
import 'dragula/dist/dragula.css'

Vue.use(Vuelidate)
Vue.use(Quasar)
Vue.use(axios)
Vue.use(VueRouter)
/* eslint-disable no-new */
import config from './config/config.json'
export const app = new Vue({
  el: '#q-app',
  router,
  store,
  i18n,
  render: h => h(require('./App')),
  created () {
    firebase.initializeApp({
      apiKey: config.APIKEY,
      authDomain: config.AUTHDOMAIN,
      databaseURL: config.DATABASEURL,
      projectId: config.PROJECTID,
      storageBucket: config.STORAGEBUCKET
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
})
Quasar.start(() => {
  app
})
