<template>
  <view class="container">
    <Navigation />
  </view>
</template>

<script>
  import Navigation from './navigation'
  import Vue from "vue-native-core";
  import { VueNativeBase } from "native-base";

  Vue.use(VueNativeBase);

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
