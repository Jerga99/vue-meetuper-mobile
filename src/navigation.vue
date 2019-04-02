<template>
  <root>
    <AppNavigation />
  </root>
</template>

<script>
  import HomeScreen from '@/screens/HomeScreen'
  import Screen1 from '@/screens/Screen1'
  import Screen2 from '@/screens/Screen2'
  import { Root } from "native-base";

  import { createStackNavigator, createAppContainer } from 'react-navigation'

  const HomeStack = createStackNavigator(
    {
      Home: HomeScreen,
      ScreenOne: Screen1,
      ScreenTwo: Screen2
    },
    {
      initialRouteName: 'Home'
    }
  )

  const AppNavigation = createAppContainer(HomeStack)

  export default {
    components: {
      AppNavigation, Root
    }
  }
</script>
