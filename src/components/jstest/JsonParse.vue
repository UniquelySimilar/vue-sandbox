<template>
  <div class="json-parse">
    <h4>JSON Parse</h4>
    <div class="row">
      <div class="col-md-6">
        <button class="btn btn-secondary" @click="parseJSON">Parse JSON String</button>
      </div>
    </div>
    <div class="row" v-if="displayCarStore">
      <div class="col-md-6">
        <div v-for="{ inStock, Brand: { name, id } } in carStoreObj.carStore" :key="id">
          <span>{{ name }}: {{ inStock }}</span>
        </div>    
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        carStoreObj: {},
        displayCarStore: false,
        jsonStr: `
          {
            "carStore": [
              {
                "Brand": {
                  "id": 1,
                  "name": "some name"
                },
                "inStock": 50
              },
              {
                "Brand": {
                  "id": 2,
                  "name": "some name"
                },
                "inStock": 100
              },
              {
                "Brand": {
                  "id": 3,
                  "name": "some name"
                },
                "inStock": 0
              }
            ]
          }
        `,
      }
    },
    methods: {
      parseJSON() {
        this.carStoreObj = JSON.parse(this.jsonStr);
        this.displayCarStore = true;
        //console.log(this.carStoreObj);
      }
    },
    // created() {
    //   console.log(this.jsonStr);
    // }
  }
</script>