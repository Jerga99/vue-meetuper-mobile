
<template>
  <view>
    <text class="text-color-primary">{{message}}</text>
  </view>
</template>

<script>
  export default {
    data () {
      return {
        message: 'Welcome to my application'
      }
    }
  }
</script>

<style>
  .text-color-primary {
    color: blue;
  }
</style>
