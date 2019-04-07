<template>
  <view class="container">
    <Navigation />
  </view>
</template>

<script>
  import Vue from "vue-native-core";
  import { VueNativeBase } from "native-base";

  import store from './store'
  import Navigation from './navigation'
  import moment from 'moment'
  import Vuelidate from 'vuelidate'

  import ScreenWithDrawer from '@/components/ScreenWithDrawer'
  import InputWithError from '@/components/InputWithError'
  import AppMessage from '@/components/AppMessage'

  // Registering Plugins
  Vue.use(VueNativeBase)
  Vue.use(Vuelidate)

  // Registering Component
  Vue.component('ScreenWithDrawer', ScreenWithDrawer)
  Vue.component('AppMessage', AppMessage)
  Vue.component('InputWithError', InputWithError)

  // Provide store to global context of vue
  Vue.prototype.$store = store

  Vue.filter('upperCase', function(value) {
    if (!value) return ''

    return value.toUpperCase()
  })

  Vue.filter('formatDate', function (value, formatType='LL') {
    if (!value) return ''

    return moment(value).format(formatType)
  })

  Vue.filter('fromNow', function (value) {
    if (!value) return ''

    return moment(value).fromNow()
  })

  export default {
    components: {
      Navigation
    }
  }
</script>

<style>
  .container {
    flex: 1;
  }
</style>
