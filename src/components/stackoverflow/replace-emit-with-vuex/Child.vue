<template>
  <div class="child">
    <h3>Child.vue</h3>
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="submitMessage">
          <div class="form-group">
            <label>New Message:</label>
            <input type="text" class="form-control" v-model="newMessage">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newMessage: ''
      }
    },
    methods: {
      submitMessage() {
        this.$store.commit('updateMessage', this.newMessage);
        this.newMessage = '';
      }
    }
    
  }
</script>