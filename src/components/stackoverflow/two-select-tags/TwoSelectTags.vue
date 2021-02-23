<template>
  <div class="two-select-tags">
    <div class="col-md-4">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="originCountries">Origin Country</label>
          <select id="originCountries" class="form-control"
            v-model="originCountry" @change="changeOrigin">
            <option v-for="(countryOption, index) in countryOptions" :key="index">{{ countryOption }}</option>
          </select>
          <span>Selected origin: {{ originCountry }}</span>
        </div>
  
        <div class="form-group">
          <label for="destinationCountries">Destiny Country</label>
          <select id="destinationCountries" class="form-control"
            v-model="destinationCountry" @change="changeDestination">
            <option v-for="(countryOption, index) in countryOptions" :key="index">{{ countryOption }}</option>
          </select>
          <span>Selected destination: {{ destinationCountry }}</span>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        countryOptions: [
          'BRAZIL',
          'USA',
          'ARGENTINA'
        ],
        originCountry: 'USA',
        destinationCountry: 'BRAZIL'
      }
    },
    methods: {
      changeOrigin() {
        // Add logic to handle destination options
        if (this.originCountry === 'BRAZIL') {
          this.destinationCountry = 'USA';
        }
      },
      changeDestination() {
        // Add logic to handle origin options
      },
      submitForm() {
        console.log('submitForm');
      }
    }

  }
</script>