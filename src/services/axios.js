import axios from 'axios'
import { AsyncStorage } from 'react-native'

const axiosInstance = axios.create({
  timeout: 3000
})

axiosInstance.interceptors.request.use(async function (config) {
  const token = await AsyncStorage.getItem('meetuper-jwt')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
}, function (err) {
  return Promise.reject(err)
})


export default axiosInstance
