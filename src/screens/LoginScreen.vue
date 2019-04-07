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
        <InputWithError :error="$v.form.email.$dirty && !$v.form.email.required"
                        msg="Email is required!">
          <nb-input v-model="form.email"
                    placeholder="Email"
                    auto-capitalize="none"
                    :on-blur="() => $v.form.email.$touch()"/>
        </InputWithError>
        <InputWithError :error="$v.form.password.$dirty && !$v.form.password.required"
                        msg="Password is required!">
          <nb-input v-model="form.password"
                    placeholder="Password"
                    auto-capitalize="none"
                    secure-text-entry
                    :on-blur="() => $v.form.password.$touch()" />
        </InputWithError>
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

        if (!this.$v.form.$invalid) {
          this.$store.dispatch('auth/login', this.form)
            .then(user => {
              alert(JSON.stringify(user))
              this.navigation.navigate('Home')
            })
        }
      },
      goToRegister () {
        this.navigation.navigate('Register')
      }
    }
  }
</script>




