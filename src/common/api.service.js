// IMPORT
import * as firebase from 'firebase'
// API USER
const apiUser = {
  signUserUp ({commit}, payload) {
    commit('setLoading', true)
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setNegative', error)
          console.log(error)
        }
      )
  },
  signUserIn ({commit}, payload) {
    commit('setLoading', true)
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setNegative', error)
          console.log(error)
        }
      )
  },
  signUserInGoogle ({commit}) {
    commit('setLoading', true)
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setNegative', error)
          console.log(error)
        }
      )
  },
  autoSignIn ({commit}, payload) {
    commit('setUser', {
      id: payload.uid,
      name: payload.displayName,
      email: payload.email,
      photoUrl: payload.photoURL
    })
  },
  resetPasswordWithEmail ({ commit }, payload) {
    const { email } = payload
    commit('setLoading', true)
    const confirmed = {
      message: 'Email Sent'
    }
    firebase.auth().sendPasswordResetEmail(email)
    .then(
      () => {
        commit('setLoading', false)
        commit('setPositive', confirmed)
        console.log(confirmed.message)
      }
    )
    .catch(
      error => {
        commit('setLoading', false)
        commit('setNegative', error)
        console.log(error)
      }
    )
  },
  logout ({commit}) {
    firebase.auth().signOut()
    commit('setUser', null)
  }

}

export default apiUser
