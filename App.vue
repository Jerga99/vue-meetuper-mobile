<template>
  <view class="container">
    <AppNavigation />
  </view>
</template>

<script>
  import HomeScreen from '@/screens/HomeScreen'
  import Screen1 from '@/screens/Screen1'
  import Screen2 from '@/screens/Screen2'

  import { createStackNavigator, createAppContainer } from 'react-navigation'

  const HomeStack = createStackNavigator(
    {
      Home: HomeScreen,
      Screen1: Screen1,
      Screen2: Screen2
    },
    {
      initialRouteName: 'Home'
    }
  )

  const AppNavigation = createAppContainer(HomeStack)

  export default {
    components: {
      HomeScreen, AppNavigation
    }
  }
</script>

<style>
  .container {
    background-color: white;
    flex: 1;
    padding: 40px;
  }
  .text-color-primary {
    color: blue;
  }
</style>
