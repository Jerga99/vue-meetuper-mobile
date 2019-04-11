import Vue from 'vue-native-core'
import axios from 'axios'
import { Platform } from 'react-native'

const BASE_URL = Platform.OS === 'ios' ? 'http://localhost:3001/api/v1'
                                       : 'http://10.0.2.2:3001/api/v1'

export default {
  namespaced: true,

  state: {
    items: [],
  },
  actions: {
    fetchCategories ({commit, state}) {
      return axios.get(`${BASE_URL}/categories`)
        .then(res => {
          const categories = res.data
          commit('setItems', {items: categories, resource: 'categories'}, {root: true})
          return state.items
        })
    }
  }
}





