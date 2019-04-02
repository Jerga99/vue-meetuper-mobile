<template>
  <view>
    <text class="text-color-primary">{{title}}</text>
    <Hello />
    <nb-button :on-press="goToScreen1">
      <nb-text>Click Me!</nb-text>
    </nb-button>
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
