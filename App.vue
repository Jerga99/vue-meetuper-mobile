<template>
  <view class="container">
    <HomeScreen v-if="activeScreen === 'homeScreen'"
                :testingData="testingData"
                :navigate="navigate" />
    <Screen1 v-if="activeScreen === 'screen1'"
             :navigate="navigate" />
  </view>
</template>

<script>
  import HomeScreen from '@/screens/HomeScreen'
  import Screen1 from '@/screens/Screen1'
  export default {
    components: {
      HomeScreen, Screen1
    },
    data () {
      return {
        activeScreen: 'homeScreen',
        testingData: 'Value from App Component'
      }
    },
    methods: {
      navigate (screen) {
        this.activeScreen = screen
      }
    }
  }
</script>

<style>
  .container {
    background-color: white;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
  .text-color-primary {
    color: blue;
  }
</style>
