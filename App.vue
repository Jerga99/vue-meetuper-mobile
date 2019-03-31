<template>
  <view class="container">
    <text class="text-color-primary">{{title}}</text>
  </view>
</template>

<script>
  export default {
    data () {
      return {
        title: 'My Meetuper App 2'
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
