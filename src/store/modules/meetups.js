import Vue from 'vue-native-core'
import axios from 'axios'
import axiosInstance from '@/services/axios'
import { Platform } from 'react-native'
import { AsyncStorage } from 'react-native'

const BASE_URL = Platform.OS === 'ios' ? 'http://localhost:3001/api/v1'
                                       : 'http://10.0.2.2:3001/api/v1'

export default {
  namespaced: true,

  state: {
    items: [],
    item: {}
  },
  getters: {

  },
  actions: {
    async fetchSecret () {
      return axiosInstance.get(`${BASE_URL}/meetups/secret`)
        .then(res => {
          const data = res.data
          alert(JSON.stringify(data))
        })
        .catch(() => alert('Not Authorized'))
    },
    fetchMeetups ({commit, state}) {
      return axios.get(`${BASE_URL}/meetups`)
        .then(res => {
          const meetups = res.data
          commit('setItems', {items: meetups, resource: 'meetups'}, {root: true})
          return state.items
        })
    },
    fetchMeetupById ({commit, state}, meetupId) {
      commit('setMeetup', {})
      return axios.get(`${BASE_URL}/meetups/${meetupId}`)
        .then(res => {
          const meetup = res.data
          commit('setMeetup', meetup)
          return state.item
        })
    },
    createMeetup ({rootState}, meetupData) {
      meetupData.processedLocation = meetupData.location.toLowerCase().replace(/[\s,]+/g,'').trim()
      meetupData.meetupCreator = rootState.auth.user

      return axiosInstance.post(`${BASE_URL}/meetups`, meetupData)
        .then(res => res.data)
    }
  },
  mutations: {
    setMeetup (state, meetup) {
      Vue.set(state, 'item', meetup)
    }
  }
}





