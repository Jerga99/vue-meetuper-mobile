

<template>
  <view>
    <text>MeetupDetailScreen</text>
    <text>{{meetupId}}</text>
  </view>
</template>

<script>
  export default {
    props: {
      navigation: {
        type: Object
      }
    },
    data () {
      return {
        meetupId: ''
      }
    },
    created () {
      this.meetupId = this.navigation.getParam('meetupId', 'undefined')
    }
  }
</script>

<style>

</style>
