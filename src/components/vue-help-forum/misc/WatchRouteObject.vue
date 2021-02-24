<template>
  <div class="watch-route-object">
    <h3>WatchRouteObject.vue for User ID {{ id }}</h3>
    <h4>User: {{ user.name }}</h4>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        user: {}
      }
    },
    props: {
      id: {
        type: Number,
        required: true
      }
    },
    methods: {
      getUser() {
        axios.get('https://jsonplaceholder.typicode.com/users/' + this.id)
        .then( response => this.user = response.data )
        .catch( error => console.log(error) )
      }
    },
    watch: {
      $route() {
        this.getUser();
      }
    },
    created() {
      this.getUser();
    }
  }
</script>