<template>
  <div class="multi-checkbox-bound-array ">
    <div class="form-group row" v-for="role in roles" :key="role.id">
      <div class="col-md-6">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" v-model="user.roles" :value="role" />
          <label class="form-check-label">{{role.name}}</label>
        </div>
        </div>
    </div>

    <p>User's selected roles</p>
    {{user.roles}}

  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          email: 'test@test.com',
          // NOTE: Any objects in this 'user.roles' array must exactly match an object in 'roles' array 
          // (i.e. all property values must match) for a checkbox initial state to be rendered correctly
          roles: [{ id: 1, name: 'Client', value: '' }]
        },
        roles: [
          {
            id: 1,
            name: 'Client',
            value: '',
          },
          {
            id: 2,
            name: 'Admin',
            value: '',
          },
          {
            id: 3,
            name: 'Guest',
            value: '',
          }
        ]
      }
    },
  }
</script>