
import Vuex from 'vuex'
import Vue from 'vue-native-core'
import axios from 'axios'
import { Platform } from 'react-native'

Vue.use(Vuex)

const BASE_URL = Platform.OS === 'ios' ? 'http://localhost:3001/api/v1'
                                       : 'http://10.0.2.2:3001/api/v1'

export default new Vuex.Store({
  // Like data in component. We are keeping our data in the state
  state: {
    todos: [],
    meetups: []
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
    },
    fetchMeetups ({commit, state}) {
      return axios.get(`${BASE_URL}/meetups`)
        .then(res => {
          const meetups = res.data
          commit('setMeetups', meetups)
          return state.meetups
        })
    }
  },
  // Like methods in component. To save data to the state.
  mutations: {
    setTodos (state, todos) {
      // 4. We are seeting data to our state in reactive way
      Vue.set(state, 'todos', todos)
    },
    setMeetups (state, meetups) {
      Vue.set(state, 'meetups', meetups)
    }


  }
})
