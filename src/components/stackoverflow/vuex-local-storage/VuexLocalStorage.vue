<template>
  <div class="vuex-local-storage">
    <div class="row">
      <div class="col-md-6">
        <button class="btn btn-secondary" @click="getAccessToken">Get Access Token</button>
        <h5>{{ accessToken }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        accessToken: ''
      }
    },
    methods: {
      getAccessToken() {
        this.accessToken = this.$store.getters.getTokenFromLocalStorage;
      }
    },
    created() {
      // Store initial access token
      this.$store.commit('storeTokenInLocalStorage', 'access-token');
    }
  }
</script>