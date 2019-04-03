<template>
  <scroll-view>
    <nb-list>
      <nb-list-item v-for="todo in todos">
        <nb-text>{{todo.title}}</nb-text>
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
      }
    },
    created () {
      this.$store.dispatch('fetchTodos')
    },
    methods: {
      goToScreen1 () {
        this.navigation.navigate('ScreenOne')
      }
    }
  }
</script>
