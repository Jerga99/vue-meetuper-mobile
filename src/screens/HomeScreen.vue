<template>
  <view>
    <text class="text-color-primary">{{title}}</text>
    <text>{{testingData}}</text>
    <Hello />
    <button title="Go to Screen 1" :on-press="() => {}" />
  </view>
</template>

<script>
  import Hello from '../components/Hello'
  export default {
    components: {
      Hello
    },
    props: {
      testingData: {
        type: String,
        required: false
      }
    },
    data () {
      return {
        title: 'Home Screen!'
      }
    }
  }
</script>
