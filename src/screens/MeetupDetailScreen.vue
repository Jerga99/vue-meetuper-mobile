

<template>
  <nb-container v-if="isMeetupLoaded">
    <!-- meetup title -->
    <view :style="styles.container">
      <nb-h1 :style="styles.headerOne">{{meetup.title}}</nb-h1>
      <!-- meetup creator avatar  -->
      <nb-thumbnail :source="{uri: meetupCreator.avatar}"/>
    </view>
    <!-- apply styles label and padding left -->
    <!-- meetup creator name -->
    <nb-text :style="[styles.label, {paddingLeft: 20}]">
      by {{meetupCreator.name}}
    </nb-text>
    <nb-content>
      <nb-card>
        <nb-card-item header bordered>
          <nb-text>Details</nb-text>
        </nb-card-item>
        <MeetupDetailInfo :meetup="meetup"/>
      </nb-card>
    </nb-content>
  </nb-container>
</template>

<script>
  import MeetupDetailInfo from '@/components/MeetupDetailInfo'
  import styles from '@/styles'
  export default {
    components: {
      MeetupDetailInfo
    },
    props: {
      navigation: {
        type: Object
      }
    },
    data () {
      return {
        styles
      }
    },
    computed: {
      meetup () {
        return this.$store.state.meetups.item
      },
      isMeetupLoaded () {
        return Object.keys(this.meetup).length > 0
      },
      meetupCreator () {
        return this.meetup.meetupCreator || {}
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
