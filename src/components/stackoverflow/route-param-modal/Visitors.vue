<template>
  <div class="visitors">
    <h4>Visitors</h4>
    <div class="row">
      <div class="col-md-4">
        <button class="btn btn-secondary" @click="showModal">Login</button>
      </div>
    </div>
    <login-modal v-if="displayLogin" @login-event="login" @close-modal-event="hideModal" />
  </div>
</template>

<script>
  import LoginModal from './LoginModal.vue';

  export default {
    components: {
      LoginModal
    },
    props: {
      modal: {
        type: String,
        required: false
      }
    },
    data() {
      return {
        displayLogin: false
      }
    },
    methods: {
      showModal() {
        this.displayLogin = true;
      },
      hideModal() {
        this.displayLogin = false;
      },
      login(user) {
        this.hideModal();
        // Process login
        console.log(user);
      }
    },
    created() {
      if (this.$route.params.modal) {
        if (this.$route.params.modal === 'login') {
          this.displayLogin = true;
        }
      }
    }
  }
</script>