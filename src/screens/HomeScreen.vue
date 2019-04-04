<template>
  <scroll-view>
    <nb-text class="header-1">Featured Meetups</nb-text>
    <!-- Separate This -->
    <MeetupCard v-for="meetup in meetups"
                :meetup="meetup"
                :key="meetup._id" />
    <!-- Separate This -->
  </scroll-view>
</template>

<script>
  import MeetupCard from '@/components/MeetupCard'
  export default {
    components: {
      MeetupCard
    },
    props: {
      navigation: {
        type: Object
      }
    },
    data () {
      return {
        title: 'Home Screen!'
      }
    },
    computed: {
      // 5. Get todos from state
      todos () {
        return this.$store.state.todos
      },
      meetups () {
        return this.$store.state.meetups.items
      }
    },
    created () {
      this.$store.dispatch('fetchTodos')
      this.$store.dispatch('meetups/fetchMeetups')
    },
    methods: {
      goToScreen1 () {
        this.navigation.navigate('ScreenOne')
      }
    }
  }
</script>

<style>
  .header-1 {
    font-size: 23px;
    padding: 20px;
    font-weight: bold;
  }
</style>



