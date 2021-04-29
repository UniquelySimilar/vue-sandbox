<template>
  <div class="router-params-change">
    <h4>Router Params Change with ID {{ id }}</h4>
    <div class="row">
      <div class="col-md-6">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
            </tr>
          </tbody>
        </table>
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
      getUser(userId) {
        axios.get('https://jsonplaceholder.typicode.com/users/' + userId)
          .then(response => this.user = response.data)
          .catch(error => console.log(error));
      }
    },
    beforeRouteUpdate(to, from, next) {
      // React to route change
      this.getUser(to.params.id);
      next();
    },
    created() {
      this.getUser(this.id);
    }
  }
</script>