import {app} from '@/main'
// STATES
const state = {
  lang: 'fr'
}
// ACTIONS
const actions = {
  'lang' ({commit}, payload) {
    commit('setLang', payload)
  }
}
// MUTATIONS
const mutations = {
  'setLang' (state, payload) {
    app.$i18n.locale = payload
  }
}
// EXPORT
export default {
  state,
  actions,
  mutations
}
