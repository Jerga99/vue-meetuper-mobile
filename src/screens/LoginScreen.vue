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
        <nb-item :error="$v.form.email.$dirty && !$v.form.email.required">
          <nb-input v-model="form.email"
                    placeholder="Email"
                    auto-capitalize="none"
                    :on-blur="() => $v.form.email.$touch()"/>
        </nb-item>
        <nb-item :error="$v.form.password.$dirty && !$v.form.password.required" last>
          <nb-input v-model="form.password"
                    placeholder="Password"
                    auto-capitalize="none"
                    secure-text-entry
                    :on-blur="() => $v.form.password.$touch()" />
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
  import { required } from 'vuelidate/lib/validators'
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
    validations: {
      form: {
        email: {
          required
        },
        password: {
          required
        }
      }
    },
    methods: {
      login () {
        this.$v.form.$touch()
        alert(`${JSON.stringify(this.form)}`)
      },
      goToRegister () {
        this.navigation.navigate('Register')
      }
    }
  }
</script>




