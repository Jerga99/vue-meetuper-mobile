<template>
  <nb-container :style="{backgroundColor: '#fff'}">
    <nb-header>
      <nb-body>
        <nb-title>
          Login
        </nb-title>
      </nb-body>
    </nb-header>
    <nb-content padder>
      <nb-form>
        <nb-item>
          <nb-input v-model="form.email"
                    placeholder="Email"
                    auto-capitalize="none"/>
        </nb-item>
        <nb-item last>
          <nb-input v-model="form.password"
                    placeholder="Password"
                    auto-capitalize="none"
                    secure-text-entry />
        </nb-item>
      </nb-form>
      <view :style="{marginTop:10}">
        <nb-button :on-press="login" block>
          <nb-text>Login</nb-text>
        </nb-button>
      </view>
      <nb-button transparent :on-press="goToRegister">
        <nb-text>Not Registered? Register Here</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>

<script>
  export default {
    props: {
      navigation: {
        type: Object
      }
    },
    data () {
      return {
        form: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      login () {
        alert(`${JSON.stringify(this.form)}`)
      },
      goToRegister () {
        this.navigation.navigate('Register')
      }
    }
  }
</script>




