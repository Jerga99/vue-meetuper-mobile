

<template>
  <nb-container>
    <!-- meetup title -->
    <nb-h1 :style="[styles.headerOne, styles.container]">Hiking in Almada</nb-h1>
    <!-- meetup creator avatar  -->
    <nb-thumbnail />
    <!-- apply styles label and padding left -->
    <!-- meetup creator name -->
    <nb-text :style="[styles.label, {paddingLeft: 20}]">
      by Filip Jerga
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
              14th Feb 2018
            </nb-text>
            <!-- Label Styles -->
            <nb-text :style="styles.label">
              From
            </nb-text>
            <nb-text>
              14:00
            </nb-text>
            <!-- Label Styles -->
            <nb-text :style="styles.label">
              To
            </nb-text>
            <nb-text>
              13:00
            </nb-text>
            <!-- Label Styles -->
            <nb-text :style="styles.label">
              Category
            </nb-text>
            <nb-text>
              Music
            </nb-text>
            <!-- Label Styles -->
            <nb-text :style="styles.label">
              Info
            </nb-text>
            <!-- short info -->
            <nb-text>
              Some nice short info
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
              NativeBase is a free and open source framework that enable developers to build high-quality mobile apps using React Native iOS and Android apps with a fusion of ES6.
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
