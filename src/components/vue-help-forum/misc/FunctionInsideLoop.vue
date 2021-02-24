<template>
  <div class="function-inside-loop">
    <div class="row">
      <div class="col-md-6">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>NAME</th>
              <th>COUNT</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" v-bind:key="product.id">
              <td>{{ product.name }}</td>
              <td>{{ product.count }}</td>
              <td>
                <button type="button" class="btn btn-primary"
                  @click="increaseCount(product.id)">Increase Count</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        products: [
          {
            id: 1,
            name: 'product1'
          },
          {
            id: 2,
            name: 'product2'
          },
          {
            id: 3,
            name: 'product3'
          }
        ]
      }
    },
    mounted() {
      // Call API

      // Add 'count' property to product objects
      this.products.forEach(product => {
        this.$set(product, 'count', 0);
      })
    },
    methods: {
      increaseCount: function (id) {
        let product = this.products.find(product => product.id === id);
        product.count++;
      }
    }
  }
</script>