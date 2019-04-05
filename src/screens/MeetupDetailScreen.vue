

<template>
  <view>
    <text>MeetupDetailScreen</text>
    <text>{{meetup.title}}</text>
    <text>{{meetup.description}}</text>
  </view>
</template>

<script>
  export default {
    props: {
      navigation: {
        type: Object
      }
    },
    computed: {
      meetup () {
        return this.$store.state.meetups.item
      }
    },
    created () {
      const meetupId = this.navigation.getParam('meetupId', 'undefined')

      this.$store.dispatch('meetups/fetchMeetupById', meetupId)
    }
  }
</script>

<style>

</style>
