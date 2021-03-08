<template>
  <div class="single-user">
    <h3>Single User</h3>
    <div class="row">
      <div class="col-md-6">
        <h4>{{ user.name }}</h4>
        <h4>{{ user.username }}</h4>
        <router-link :to="{ name: 'Users' }">Back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SingleUser',
    props: {
      id: {
        type: Number,
        required: true
      }
    },
    computed: {
      user() {
        return this.$store.getters.getUser(this.id);
      }
    }
  }
</script>

