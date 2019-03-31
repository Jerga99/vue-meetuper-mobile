<template>
  <view>
    <text class="text-color-primary">{{title}}</text>
    <text>{{testingData}}</text>
    <Hello />
    <button title="Go to Screen 1" :on-press="() => navigate('screen1')" />
  </view>
</template>

<script>
  import Hello from '../components/Hello'
  export default {
    components: {
      Hello
    },
    // props: ['testingData', 'navigate'],
    props: {
      testingData: {
        type: String,
        required: false
      },
      navigate: {
        type: Function,
        required: true
      }
    },
    data () {
      return {
        title: 'Home Screen!'
      }
    }
  }
</script>
