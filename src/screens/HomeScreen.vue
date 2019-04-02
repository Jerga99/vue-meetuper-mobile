<template>
  <view>
    <text class="text-color-primary">{{title}}</text>
    <Hello />
    <button :title="'Go To Screen 1'" :on-press="goToScreen1" />
  </view>
</template>

<script>
  import Hello from '@/components/Hello'
  export default {
    components: {
      Hello
    },
    props: {
      navigation: {
        type: Object
      }
    },
    data () {
      return {
        title: 'Home Screen!'
      }
    },
    methods: {
      goToScreen1 () {
        this.navigation.navigate('ScreenOne')
      }
    }
  }
</script>
