// STATE
const state = {
  loading: false,
  positive: null,
  negative: null,
  warning: null,
  info: null
}
// GETTERS
const getters = {
  getLoading (state) {
    return state.loading
  },
  getPositive (state) {
    return state.positive
  },
  getNegative (state) {
    return state.negative
  },
  getWarning (state) {
    return state.warning
  },
  getInfo (state) {
    return state.info
  }
}
// MUTATIONS
const mutations = {
  'setLoading' (state, payload) {
    state.loading = payload
  },
  'setPositive' (state, payload) {
    state.positive = payload
  },
  'setNegative' (state, payload) {
    state.negative = payload
  },
  'setWarning' (state, payload) {
    state.warning = payload
  },
  'setInfo' (state, payload) {
    state.info = payload
  }
}
// EXPORT
export default {
  state,
  getters,
  mutations
}
