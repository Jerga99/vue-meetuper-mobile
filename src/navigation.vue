<template>
  <root>
    <AppNavigation />
  </root>
</template>

<script>
  import HomeScreen from '@/screens/HomeScreen'
  import Screen1 from '@/screens/Screen1'
  import Screen2 from '@/screens/Screen2'
  import Screen3 from '@/screens/Screen3'
  import { Root } from "native-base";

  import { createStackNavigator,
           createBottomTabNavigator,
           createAppContainer } from 'react-navigation'

  const HomeStack = createStackNavigator(
    {
      Home: HomeScreen,
      ScreenOne: Screen1
    },
    {
      initialRouteName: 'Home'
    }
  )

  const SomeOtherStack = createStackNavigator({
    Screen2,
    Screen3
  })

  const TabNavigation = createBottomTabNavigator({
    Meetups: HomeStack,
    Other: SomeOtherStack
  })

  const AppNavigation = createAppContainer(TabNavigation)

  export default {
    components: {
      AppNavigation, Root
    }
  }
</script>
