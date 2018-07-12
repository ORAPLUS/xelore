import apiUser from '@/common/api.service'
// STATES
const state = {
  user: null,
  layoutNeeded: true,
  isLoginPage: false,
  mobileMode: false,
  menuCollapse: true,
  posts: []
}
// GETTERS
const getters = {
  getUser (state) {
    return state.user
  },
  getLayoutNeeded () {
    return state.layoutNeeded
  },
  getIsLoginPage () {
    return state.isLoginPage
  },
  getMobileMode () {
    return state.mobileMode
  },
  getMenuCollapse () {
    return state.menuCollapse
  },
  getPosts () {
    return state.posts
  }
}
// ACTIONS
const actions = {
  'signUserUp' ({commit}, payload) {
    apiUser.signUserUp({commit}, payload)
  },
  'signUserIn' ({commit}, payload) {
    apiUser.signUserIn({commit}, payload)
  },
  'signUserInGoogle' ({commit}) {
    apiUser.signUserInGoogle({commit})
  },
  'autoSignIn' ({commit}, payload) {
    apiUser.autoSignIn({commit}, payload)
  },
  'resetPasswordWithEmail' ({commit}, payload) {
    apiUser.resetPasswordWithEmail({commit}, payload)
  },
  'logout' ({commit}) {
    apiUser.logout({commit})
  }
}
// MUTATIONS
const mutations = {
  'setUser' (state, payload) {
    state.user = payload
  },
  'setLayoutNeeded' (state, value) {
    state.layoutNeeded = value
  },
  'setIsLoginPage' (state, value) {
    state.isLoginPage = value
  },
  'setMobileMode' (state, value) {
    state.mobileMode = value
  },
  'setMenuCollapse' (state, value) {
    state.menuCollapse = value
  },
  'setPosts' (state, posts) {
    state.posts = posts
  }
}
// EXPORT
export default {
  state,
  getters,
  actions,
  mutations
}
