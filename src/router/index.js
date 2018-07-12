import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthGuard from './auth-guard'
import AuthInstall from './auth-install'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

export default new VueRouter({
    /*
     * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
     * it is only to be used only for websites.
     *
     * If you decide to go with "history" mode, please also open /config/index.js
     * and set "build.publicPath" to something other than an empty string.
     * Example: '/' instead of current ''
     *
     * If switching back to default "hash" mode, don't forget to set the
     * build publicPath back to '' so Cordova builds work again.
     */
  mode: 'history',
  routes: [
    {
      path: '/',
      component: load('views/dashboard/one/dashboard'),
      meta: {
        name: 'Dashboard One'
      },
      beforeEnter: AuthGuard
    },
    {
      path: '/success',
      component: load('AuthSuccess'),
      meta: {
        name: 'Form Profile'
      },
      beforeEnter: AuthGuard
    },
    {
      path: '/form',
      component: load('views/form/simpleForm/simpleForm'),
      meta: {
        name: 'Form find / edit'
      },
      beforeEnter: AuthGuard
    },
    {
      path: '/install',
      component: load('views/form/install/install'),
      meta: {
        name: 'Installation de XELORE'
      },
      beforeEnter: AuthInstall
    },
    {
      path: '/embeeded',
      component: load('views/form/embeeded/embeeded'),
      meta: {
        name: 'Embeeded Validations'
      },
      beforeEnter: AuthGuard
    },
    {
      path: '/advanced-form-one',
      component: load('views/form/advancedFormOne/advancedFormOne'),
      meta: {
        name: 'Advanced Form One'
      },
      beforeEnter: AuthGuard
    },
    {
      path: '/signin',
      component: load('views/login/login-one')
    },
    {
      path: '/signup',
      component: load('views/register/register-one')
    },
    {
      path: '/pricing',
      component: load('views/pricing/pricing'),
      meta: {
        name: 'Pricing'
      },
      beforeEnter: AuthGuard
    },
    {
      path: '/drag-and-drop',
      component: load('views/dragAndDrop/dragAndDrop'),
      meta: {
        name: 'Drag and Drop'
      },
      beforeEnter: AuthGuard
    },
    {
      path: '/server-side-data-table',
      component: load('views/serverSideDataTable/serverSideDataTable'),
      meta: {
        name: 'Server Side Data Table'
      },
      beforeEnter: AuthGuard
    },
    {
      path: '*',
      component: load('Error404')
    }
  ]
})
