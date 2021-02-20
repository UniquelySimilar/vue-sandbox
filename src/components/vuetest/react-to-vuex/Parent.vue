<template>
  <div class="parent">
    <h2>Parent Component</h2>
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="updateMessage">
          <div class="form-group">
            <label>New Message</label>
            <input type="text" class="form-control" v-model="message">
          </div>
          <button class="btn btn-primary" type="submit">Update</button>
        </form>
      </div>
    </div>

    <hr>

    <child />
  </div>
</template>

<script>
  import Child from '@/components/vuetest/react-to-vuex/Child'

  export default {
    components: {
      Child
    },
    data() {
      return {
        message: ''
      }
    },
    methods: {
      updateMessage() {
        this.$store.commit('updateMessage', this.message);
        this.message = '';
      }
    }
  }
</script>