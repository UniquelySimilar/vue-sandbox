<template>
  <div class="mixin-plugin">
    <h4>Mixin Plugin Tester</h4>
    <div class="row">
      <div class="col-md-3">
        <button id="message-btn" class="btn btn-secondary" @click="getMessage">Click to call MixinPlugin method</button>
      </div>
    </div>
    <div class="row" v-if="displayMessage">
      <div class="col-md-3">
        <div class="alert alert-primary" role="alert">
          <span>{{ message }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: '',
        displayMessage: false
      }
    },
    methods: {
      getMessage() {
        this.message = this.getMixinPluginMessage();
        this.displayMessage = true;
      }
    }
  }
</script>

<style scoped>
  #message-btn {
    margin-bottom: 0.5rem;
  }
</style>