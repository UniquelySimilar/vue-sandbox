<template>
  <div class="login-modal">
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Login</h5>
            <button type="button" @click="closeModal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="login">
              <div class="form-group">
                <label for="username">User Name</label>
                <input type="email" class="form-control" id="username" v-model="user.name">
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" v-model="user.password">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="login">Login</button>
            <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          name: '',
          password: ''
        }
      }
    },
    methods: {
      closeModal() {
        this.$emit('close-modal-event');
      },
      login() {
        this.$emit('login-event', this.user)
      }
    }
  }
</script>

<style scoped>
  /* Override default value of 'none' */
  .modal {
    display: block;
  }
</style>