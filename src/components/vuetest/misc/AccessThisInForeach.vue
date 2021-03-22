<template>
  <div class="access-this-in-foreach">
    <h4>AccessThisInForeach.vue</h4>
    <div class="row">
      <div class="col-md-6">
        <span>{{ this.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        users: [],
        message: 'Message text'
      }
    },
    methods: {
      accessThis() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          this.users = response.data;
          this.users.forEach( () => {
            console.log(this.message);
          })
        })
        .catch( error => console.log(error) )
      }
    },
    created() {
      this.accessThis();
    }
  }
</script>