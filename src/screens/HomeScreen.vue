<template>
  <scroll-view>
    <nb-text class="header-1">Featured Meetups</nb-text>
    <nb-card v-for="meetup in meetups">
      <nb-card-item bordered>
        <nb-left>
          <nb-thumbnail :source="{uri: meetup.meetupCreator.avatar}"></nb-thumbnail>
          <nb-body>
            <nb-text>{{meetup.title}}</nb-text>
            <nb-text note>{{meetup.startDate}}</nb-text>
          </nb-body>
        </nb-left>
      </nb-card-item>
      <nb-card-item>
        <nb-body>
          <image :source="{uri: meetup.image}"
                 :style="stylesObj.cardItemImage"
                 class="card-item-image"/>
          <nb-text>{{meetup.description}}</nb-text>
        </nb-body>
      </nb-card-item>
      <nb-card-item :style="{ paddingVertical: 0 }">
        <nb-left>
          <nb-button transparent>
            <nb-icon name="person"></nb-icon>
            <nb-text>{{meetup.joinedPeopleCount}} people are comming</nb-text>
          </nb-button>
        </nb-left>
      </nb-card-item>
    </nb-card>
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
        title: 'Home Screen!',
        stylesObj: {
          cardItemImage: {
            resizeMode: "cover",
            width: '100%',
            marginBottom: 10
          }
        }
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
  .card-item-image {
    flex: 1;
    height: 200;
  }

  .header-1 {
    font-size: 23px;
    padding: 20px;
    font-weight: bold;
  }
</style>



