<template>
  <div class="add-object-property">
    <h4>Select Fruit</h4>
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="submitForm">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Size</th>
                <th scope="col">Enter Number Requesting</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="fruit in fruits" :key="fruit.id">
                <th scope="row">{{ fruit.id }}</th>
                <td>{{ fruit.name }}</td>
                <td>{{ fruit.size }}</td>
                <td>
                  <div class="form-group small">
                    <input class="form-control" type="number" v-model="fruit.quantity"/>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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
        fruits: [
          {
            id: 1,
            name: 'Mango',
            size: 'Big'
          },
          {
            id: 2,
            name: 'Banana',
            size: 'Medium'
          },
          {
            id: 3,
            name: 'Apple',
            size: 'Medium'
          },
        ]
      }
    },
    methods: {
      getFruit() {
        // Simulate API call
        setTimeout(this.addQuantity(), 1000);
      },
      addQuantity() {
        this.fruits.forEach(fruit => {
          this.$set(fruit, 'quantity', 0);
        });
      },
      submitForm() {
        console.log(this.fruits);
      }
    },
    created() {
      this.getFruit();
      console.log(this.fruits);
    }
  }
</script>