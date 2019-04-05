

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
        <nb-card-item bordered>
          <nb-body>
            <!-- Label Styles -->
            <nb-text :style="styles.label">
              Date
            </nb-text>
            <nb-text>
              {{meetup.startDate}}
            </nb-text>
            <!-- Label Styles -->
            <nb-text :style="styles.label">
              From
            </nb-text>
            <nb-text>
              {{meetup.timeFrom}}
            </nb-text>
            <!-- Label Styles -->
            <nb-text :style="styles.label">
              To
            </nb-text>
            <nb-text>
              {{meetup.timeTo}}
            </nb-text>
            <!-- Label Styles -->
            <nb-text :style="styles.label">
              Category
            </nb-text>
            <nb-text>
              {{meetup.category.name}}
            </nb-text>
            <!-- Label Styles -->
            <nb-text :style="styles.label">
              Info
            </nb-text>
            <!-- short info -->
            <nb-text>
              {{meetup.shortInfo}}
            </nb-text>
          </nb-body>
        </nb-card-item>
        <nb-card-item header bordered>
          <nb-text>Description</nb-text>
        </nb-card-item>
        <nb-card-item bordered>
          <nb-body>
            <!-- description -->
            <nb-text>
              {{meetup.description}}
            </nb-text>
          </nb-body>
        </nb-card-item>
      </nb-card>
    </nb-content>
  </nb-container>
</template>

<script>
  import styles from '@/styles'
  export default {
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
