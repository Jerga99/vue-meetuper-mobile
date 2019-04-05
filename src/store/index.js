
import Vuex from 'vuex'
import Vue from 'vue-native-core'
import axios from 'axios'

import meetups from './modules/meetups'
import threads from './modules/threads'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    meetups,
    threads
  },
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
    // 2. We are getting here from dispatch of action in homeScreen
    fetchTodos ({commit, state}) {
      return axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
          const todos = res.data
          // 3. Commiting setTodos mutation
          commit('setTodos', todos)
          return state.todos
        })
    }
  },
  // Like methods in component. To save data to the state.
  mutations: {
    setTodos (state, todos) {
      // 4. We are seeting data to our state in reactive way
      Vue.set(state, 'todos', todos)
    }
  }
})
