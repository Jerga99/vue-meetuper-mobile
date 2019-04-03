
import Vuex from 'vuex'
import Vue from 'vue-native-core'

Vue.use(Vuex)

export default new Vuex.Store({
  // Like data in component. We are keeping our data in the state
  state: {
    todos: []
  },
  // Like computed properties in componen.
  // You can use getters to access state in the store
  getters: {

  },
  // Like methods in component.
  // To perform actions that usualy results in data
  actions: {

  },
  // Like methods in component. To save data to the state.
  mutations: {

  }
})
