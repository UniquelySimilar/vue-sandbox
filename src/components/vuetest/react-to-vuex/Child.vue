<template>
  <div class="child">
    <h3>Child component</h3>
    <div class="row">
      <div class="col-md-6">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>MESSAGES</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(message,index) in messages" :key="index">
              <td>{{ message }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      messages() {
        return this.$store.state.messages;
      }
    }

  }
</script>