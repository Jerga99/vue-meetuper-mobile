

<template>
  <nb-container v-if="isMeetupLoaded">
    <view :style="styles.container">
      <nb-h1 :style="styles.headerOne">{{meetup.title}}</nb-h1>
      <nb-thumbnail :source="{uri: meetupCreator.avatar}"/>
      <nb-text :style="styles.label">
        by {{meetupCreator.name}}
      </nb-text>
    </view>
    <nb-content>
      <nb-card>
        <nb-tabs>
          <nb-tab heading="Details">
            <MeetupDetailInfo :meetup="meetup"/>
          </nb-tab>
          <nb-tab heading="Threads">
            <text>Threads</text>
          </nb-tab>
           <nb-tab heading="Joined People">
            <text>Joined People</text>
          </nb-tab>
        </nb-tabs>
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
      threads () {
        return this.$store.state.threads.items
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
      this.$store.dispatch('threads/fetchThreads', meetupId)
        .then(threads => alert(threads))
    }
  }
</script>

<style>

</style>
