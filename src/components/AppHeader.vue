<template>
  <nb-header>
    <nb-left>
      <nb-button :on-press="goBack" v-if="!root" transparent>
        <nb-icon name="arrow-back" />
      </nb-button>
    </nb-left>
    <nb-body>
      <nb-title>{{screen}}</nb-title>
    </nb-body>
    <nb-right>
      <nb-button :on-press="displayActionsheet" transparent>
        <nb-icon name="menu" />
      </nb-button>
    </nb-right>
  </nb-header>
</template>

<script>
  import { ActionSheet } from "native-base";
  export default {
    props: {
      screen: {
        type: String,
        default: 'Header'
      },
      root: {
        type: Boolean
      },
      navigation: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        btnOptions: ["Login", "Register", "Settings", "Logout", "Cancel"],
        clicked: 0
      }
    },
    computed: {
     optionCancelIndex () {
      return this.btnOptions.length - 1
     },
     optionDestructiveIndex () {
      return this.optionCancelIndex - 1
     }
    },
    methods: {
      displayActionsheet () {
        ActionSheet.show(
          {
            options: this.btnOptions,
            cancelButtonIndex: this.optionCancelIndex,
            destructiveButtonIndex: this.optionDestructiveIndex,
            title: "Select An Option"
          },
          buttonIndex => {
            this.clicked = this.btnOptions[buttonIndex];
            alert(`${this.clicked} clicked`)
          }
        );
      },
      goBack () {
        this.navigation.goBack()
      }
    }
  }
</script>






