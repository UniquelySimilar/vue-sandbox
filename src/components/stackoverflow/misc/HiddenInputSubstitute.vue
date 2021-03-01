<template>
  <div class="hidden-input-substitute">
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label>First name</label>
            <input type="text" class="form-control" v-model="formObject.firstName">
          </div>
          <div class="form-group">
            <label>Last name</label>
            <input type="text" class="form-control" v-model="formObject.lastName">
          </div>
          <button class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        formObject: {
          firstName: '',
          lastName: '',
          hiddenValueOne: 'hiddenOne',
          hiddenValueTwo: 'hiddenTwo'
        }
      }
    },
    methods: {
      submitForm() {
        console.log(this.formObject);
        axios.post('/path/to/endpoint', this.formObject)
        .then( response => console.log(response) )
        .catch( error => console.log(error) )
      }
    }

  }
</script>