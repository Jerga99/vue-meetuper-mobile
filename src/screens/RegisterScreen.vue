<template>
  <nb-container :style="{backgroundColor: '#fff'}">
    <nb-header>
      <nb-body>
        <nb-title>
          Register
        </nb-title>
      </nb-body>
    </nb-header>
    <nb-content padder>
      <nb-form>
        <nb-item>
          <nb-input v-model="form.username"
                    placeholder="Username"
                    auto-capitalize="none" />
        </nb-item>
        <nb-item>
          <nb-input v-model="form.name"
                    placeholder="Full Name"
                    auto-capitalize="none" />
        </nb-item>
        <nb-item>
          <nb-input v-model="form.email"
                    placeholder="Email"
                    auto-capitalize="none" />
        </nb-item>
        <nb-item>
          <nb-input v-model="form.avatar"
                    placeholder="Avatar Url"
                    auto-capitalize="none" />
        </nb-item>
        <nb-item>
          <nb-input v-model="form.password"
                    placeholder="Password"
                    auto-capitalize="none"
                    secure-text-entry />
        </nb-item>
        <nb-item>
          <nb-input v-model="form.passwordConfirmation"
                    last
                    placeholder="Password Confirmation"
                    auto-capitalize="none" />
        </nb-item>
      </nb-form>
      <view :style="{marginTop:10}">
        <nb-button :on-press="register" block>
          <nb-text>Register</nb-text>
        </nb-button>
      </view>
      <nb-button transparent :on-press="goToLogin">
        <nb-text>Already Registered? You can login here.</nb-text>
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
          username: '',
          name: '',
          avatar: '',
          email: '',
          password: '',
          passwordConfirmation: ''
        }
      }
    },
    methods: {
      register () {
        alert(JSON.stringify(this.form))
      },
      goToLogin () {
        this.navigation.navigate('Login')
      }
    }
  }
</script>





