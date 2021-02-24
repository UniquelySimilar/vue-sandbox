<template>
  <div class="dynamic-form-object">
    <h2>Dynamic Form Object</h2>
    <div class="row">

      <div class="col-sm-4 form-container">
        <form @submit.prevent="submitUserForm">
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model.trim="user.name">
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="text" class="form-control"
              v-model.trim="user.email">
          </div>
          <div class="form-group">
            <button class="btn btn-primary" type="submit">Save</button>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
  import { submitUserForm } from '@/globalvars.js'

  export default {
    data() {
      return {
        user: {},
      }
    },
    props: {
      userProperties: {
        type: Object,
        required: true
      }
    },
    methods: {
      addUserProperties() {
        this.user = Object.assign({}, this.userProperties);
      },
      submitUserForm
    },
    created() {
      this.addUserProperties();
    }
  }
</script>