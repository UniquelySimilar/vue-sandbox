<template>
  <div class="input-bound-object-array">
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="submitForm">
          <div class="form-group" v-for="(option, i) in article" :key="i">
            <label>{{ option.id }}</label>
            <input type="text" class="form-control" v-model="option.value"
              required />
          </div>
          <button type="submit" class="btn btn-secondary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        article: [
          { id: 'art1', value: 'artValue1' },
          { id: 'art2', value: 'artValue2' },
          { id: 'art3', value: 'artValue3' }
          // There are about 50 objects
        ]
      }
    },
    methods: {
      submitForm() {
        // 'this.article' is updated as the input values are changed, so at this point
        // you have the data changes, so you can process it as needed, i.e. POST to REST endpoint
        console.log(this.article);
      }
    }

  }
</script>