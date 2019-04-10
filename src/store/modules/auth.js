import Vue from 'vue-native-core'
import axios from 'axios'
import axiosInstance from '@/services/axios'
import { Platform } from 'react-native'
import { AsyncStorage } from 'react-native'
import jwtDecode from 'jwt-decode'

const BASE_URL = Platform.OS === 'ios' ? 'http://localhost:3001/api/v1'
                                       : 'http://10.0.2.2:3001/api/v1'

const isTokenValid = (token) => {
  if (token) {
    const decodedToken = jwtDecode(token)
    return decodedToken && (decodedToken.exp * 1000) > new Date().getTime()
  }

  return false
}

export default {
  namespaced: true,

  state: {
    user: null,
    isAuthResolved: false
  },
  getters: {
    isAuth (state) {
      return !!state.user
    }
  },
  actions: {
    login ({commit, state}, userData) {
      return axios.post(`${BASE_URL}/users/login`, userData)
        .then(res => {
          const user = res.data
          AsyncStorage.setItem('meetuper-jwt', user.token)
          commit('setAuthUser', user)
          return state.user
        })
    },
    register (context, userData) {
      return axios.post(`${BASE_URL}/users/register`, userData)
    },
    logout ({commit}) {
      return new Promise((resolve) => {
        AsyncStorage.removeItem('meetuper-jwt')
        commit('setAuthUser', null)
        resolve()
      })
    },
    fetchCurrentUser ({commit, state}) {
      return axiosInstance.get(`${BASE_URL}/users/me`)
        .then(res => {
          const user = res.data
          AsyncStorage.setItem('meetuper-jwt', user.token)
          commit('setAuthUser', user)
          return state.user
        })
    },
    async verifyUser ({dispatch, commit}) {
      const jwt = await AsyncStorage.getItem('meetuper-jwt')

      if (jwt && isTokenValid(jwt)) {
        const user = await dispatch('fetchCurrentUser')
        commit('resolveAuth')

        return user ? Promise.resolve(jwt)
                    : Promise.reject('Cannot fetch user')
      } else {
        commit('resolveAuth')
        return Promise.reject('Token is not valid')
      }
    }
  },
  mutations: {
    setAuthUser (state, user) {
      return state.user = user
    },
    resolveAuth (state) {
      state.isAuthResolved = true
    }
  }
}





