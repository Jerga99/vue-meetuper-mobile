

<template>
  <KeyboardAvoidingView :style="{flex: 1}"
                        behavior="padding"
                        keyboardVerticalOffset="23"
                        enabled>
    <nb-container>
      <!-- Provide Navigation to App Header -->
      <AppHeader :navigation="navigation" />
      <!-- Provide Styles Here -->
      <view :style="styles.container">
        <nb-text :style="styles.headerOne">Create Meetup</nb-text>
      </view>
      <nb-content>
        <nb-form>
          <nb-item stackedLabel>
            <nb-label>Location</nb-label>
            <nb-input v-model="form.location"/>
          </nb-item>
          <nb-item stackedLabel>
            <nb-label>Title</nb-label>
            <nb-input v-model="form.title"/>
          </nb-item>
          <nb-item stackedLabel>
            <nb-label>Start Date</nb-label>
            <nb-input v-model="form.startDate"/>
          </nb-item>
          <nb-item stackedLabel>
            <nb-label>Time From</nb-label>
            <nb-input v-model="form.timeFrom"/>
          </nb-item>
          <nb-item stackedLabel>
            <nb-label>Time To</nb-label>
            <nb-input v-model="form.timeTo"/>
          </nb-item>
          <nb-item stackedLabel>
            <nb-label>Category</nb-label>
            <view :style="{flex: 1,
                           alignSelf: 'stretch',
                           paddingLeft: null,
                           marginLeft: null,
                           heigth: 50}">
              <nb-picker
                mode="dropdown"
                placeholder="Select Category"
                placeholderStyle="{ color: '#bfc6ea' }"
                :selectedValue="form.category"
                :onValueChange="onCategoryChange"
              >
                <nb-item label="Wallet" value="key0" />
                <nb-item label="ATM Card" value="key1" />
                <nb-item label="Debit Card" value="key2" />
                <nb-item label="Credit Card" value="key3" />
                <nb-item label="Net Banking" value="key4" />
              </nb-picker>
            </view>
          </nb-item>
          <nb-item stackedLabel>
            <nb-label>Image</nb-label>
            <nb-input v-model="form.image"/>
          </nb-item>
          <nb-item stackedLabel>
            <nb-label>Description</nb-label>
            <nb-input v-model="form.description"/>
          </nb-item>
          <nb-item stackedLabel>
            <nb-label>Additional Info</nb-label>
            <nb-input v-model="form.shortInfo"/>
          </nb-item>
          <nb-button :on-press="createMeetup" block>
            <nb-text>Create Meetup</nb-text>
          </nb-button>
        </nb-form>
      </nb-content>
    </nb-container>
  </KeyboardAvoidingView>
</template>

<script>
  import { KeyboardAvoidingView } from 'react-native';
  import styles from '@/styles'
  export default {
    components: {
      KeyboardAvoidingView
    },
    props: {
      navigation: {
        type: Object
      }
    },
    data () {
      return {
        styles,
        form: {
          location: null,
          title: null,
          startDate: null,
          category: null,
          image: null,
          shortInfo: null,
          description: null,
          timeTo: null,
          timeFrom: null
        }
      }
    },
    methods: {
      createMeetup () {
        alert(JSON.stringify(this.form))
      },
      onCategoryChange (category) {
        this.form.category = category
      }
    }
  }
</script>






