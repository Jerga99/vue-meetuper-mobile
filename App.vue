<template>
  <view class="container">
    <HomeScreen />
  </view>
</template>

<script>
  import HomeScreen from '@/screens/HomeScreen'
  export default {
    components: {
      HomeScreen
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
