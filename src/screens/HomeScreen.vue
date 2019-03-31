<template>
  <view class="container">
    <text class="text-color-primary">{{title}}</text>
    <Hello />
  </view>
</template>

<script>
  import Hello from '../components/Hello'
  export default {
    components: {
      Hello
    },
    data () {
      return {
        title: 'Home Screen!'
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
