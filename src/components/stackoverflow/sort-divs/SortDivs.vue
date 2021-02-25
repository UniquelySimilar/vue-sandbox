<template>
  <div class="sort-divs">
    <div class="row">
      <div class="col-md-6">
        <h3>Promotions</h3>
        <table class="table table-bordered">
          <thead>
            <th>ID</th>
            <th>DESCRIPTION</th>
            <th>YEARS</th>
          </thead>
          <tbody>
            <tr v-for="promotion in promotions" :key="promotion.id">
              <td>{{ promotion.id }}</td>
              <td>{{ promotion.description }}</td>
              <td>{{ promotion.numYears }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <h3>Promotions sorted by years</h3>
        <table class="table table-bordered">
          <thead>
            <th>ID</th>
            <th>DESCRIPTION</th>
            <th>YEARS</th>
          </thead>
          <tbody>
            <tr v-for="promotion in promotionsSorted" :key="promotion.id">
              <td>{{ promotion.id }}</td>
              <td>{{ promotion.description }}</td>
              <td>{{ promotion.numYears }}</td>
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
        promotions: [
          {
            id: 1,
            description: 'promotion1 description'
          },
          {
            id: 2,
            description: 'promotion2 description'
          },
          {
            id: 3,
            description: 'promotion3 description'
          },
        ]
      }
    },
    computed: {
      promotionsSorted() {
        let arrayCopy = [...this.promotions];
        return arrayCopy.sort( (a, b) => {
          return (a.numYears < b.numYears) ? -1 : 1;
        })
      }
    },
    methods: {
      addNumYears() {
        let numYears = 6;
        this.promotions.forEach( promotion => {
          this.$set(promotion, 'numYears', numYears);
          numYears -= 2;
        })
      }
    },
    created() {
      this.addNumYears();
    }
  }
</script>