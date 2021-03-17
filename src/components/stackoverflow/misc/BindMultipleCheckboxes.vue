<template>
  <div class="bind-multiple-checkboxes">
    <h3>Select Roles</h3>
    <div class="row">
      <div class="col-md-6">
        <div class="form-check" v-for="(role, index) in roles" :key="index">
          <input class="form-check-input" type="checkbox" :id="'checkbox' + index" v-model="role.selected">
          <label class="form-check-label" :for="'checkbox' + index">
            {{ role.name }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        roles: [
          {
            name: 'role1',
            selected: true
          },
          {
            name: 'role2',
            selected: false
          },
          {
            name: 'role3',
            selected: false
          },
          {
            name: 'role4',
            selected: true
          },
        ]
      }
    }
  }
</script>