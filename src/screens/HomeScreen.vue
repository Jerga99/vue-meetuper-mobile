<template>
  <scroll-view>
    <nb-list>
      <nb-list-item v-for="meetup in meetups">
        <nb-text>{{meetup.title}}</nb-text>
      </nb-list-item>
    </nb-list>
  </scroll-view>
</template>

<script>
  import axios from 'axios'
  export default {
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
        return this.$store.state.meetups
      }
    },
    created () {
      this.$store.dispatch('fetchTodos')
      this.$store.dispatch('fetchMeetups')
    },
    methods: {
      goToScreen1 () {
        this.navigation.navigate('ScreenOne')
      }
    }
  }
</script>
