<template>
  <div class="email-validation">
    <h3>EmailValidation.vue</h3>
    <div class="row">
      <div class="col-md-6">
        <form>
          <input type="email" @focus="showRestOfForm = true, invalidEmail = false" placeholder="Enter your email"
            class="email" v-model="email" :class="{invalidEmail: invalidEmail}">
          <p v-if="invalidEmail" class="invalid-message">Incorrect Email Format</p>
          <!-- Animation for showing the rest of newsletter form -->
          <transition name="rest">
            <div class="rest-of-form" v-if="showRestOfForm">
              <div class="gender-selection" :class="{invalid: invalidGender}" @click="invalidGender = false">
                <div class="gender-select">
                  <input type="radio" name="gender" value="man" v-model="gender">
                  <div class="custom-radio"></div>
                  <label for="man">man</label>
                </div>
                <div class="gender-select">
                  <input type="radio" name="gender" value="woman" v-model="gender">
                  <div class="custom-radio"></div>
                  <label for="woman" class="woman-label">woman</label>
                </div>
              </div>
              <p class="invalid-message" v-if="invalidGender">Please select your gender</p>
              <div class="terms" :class="{invalid: invalidTerms}">
                <input type="checkbox" id="terms" v-model="terms" @click="invalidTerms = false">
                <label for="terms">Accept <a href="#">Terms and Regulations</a></label>
              </div>
              <p class="invalid-message" v-if="invalidTerms">Please accept the terms and regulations</p>
              <button class="sign-up" @click.prevent="signUp">Sign Up</button>
            </div>
          </transition>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showRestOfForm: false,
        email: '',
        gender: null,
        invalidEmail: false,
        invalidTerms: false,
        invalidGender: false,
        terms: false
      }
    },
    methods: {
      signUp() {
        // Validating email using a regular expression using RFC2822 reg expresssion validation
        // let emailValid
        //const emailRegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
        // This simplified regex works
        const emailRegExp = /^.+@.+\..+$/

        if (emailRegExp.test(this.email) && this.gender && this.terms) {
          console.log("success")
        }
        else {
          console.log('entered else block')
          if ( !(emailRegExp.test(this.email)) ) {
            console.log('this.email')
            console.log(this.email);
            console.log('regex test result')
            console.log(emailRegExp.test(this.email))
            console.log('not regex test result')
            console.log(!emailRegExp.test(this.email))

            console.log('setting email invalid')
            this.invalidEmail = true
          }

          if (!this.gender) {
            this.invalidGender = true
          }

          if (!this.terms) {
            this.invalidTerms = true
          }
        }

      }
    }

  }
</script>

<style scoped>
  .invalidEmail {
    border: 0.1rem solid red;
    color: red;
  }

  .invalid-message {
    color: red;
  }

  .invalid {
    color: red;
  }
</style>