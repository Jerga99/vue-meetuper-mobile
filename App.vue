<template>
  <view class="container">
    <HomeScreen v-if="activeScreen === 'homeScreen'" />
    <Screen1 v-if="activeScreen === 'screen1'" />
    <button title="Go to Screen 1" :on-press="() => navigate('screen1')" />
  </view>
</template>

<script>
  import HomeScreen from './src/screens/HomeScreen'
  import Screen1 from './src/screens/Screen1'
  export default {
    components: {
      HomeScreen, Screen1
    },
    data () {
      return {
        activeScreen: 'homeScreen'
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
