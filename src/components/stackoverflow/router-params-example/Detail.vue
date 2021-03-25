<template>
  <div class="child">
    <h4>Detail</h4>
    <div class="row">
      <div class="col-md-6">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>USER NAME</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.username }}</td>
            </tr>
          </tbody>
        </table>
        <router-link class="btn btn-secondary" :to="{ name: 'home' }">Back</router-link>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    props: {
      id: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        user: {}
      }
    },
    methods: {
      getUser() {
        axios.get('https://jsonplaceholder.typicode.com/users/' + this.id)
        .then( response => this.user = response.data )
        .catch( error => console.log(error) )
      }
    },
    created() {
      this.getUser();
    }    
  }
</script>