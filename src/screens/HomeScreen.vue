<template>
  <view>
    <text class="text-color-primary">{{title}}</text>
    <Hello />
  </view>
</template>

<script>
  import Hello from '@/components/Hello'
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
