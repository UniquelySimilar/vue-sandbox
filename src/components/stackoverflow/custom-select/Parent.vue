<template>
  <div class="parent">
    <custom-select :id="'continent'" :selected="user.continent" :options="continents"
      v-on:change-continent-event="changedContinent" />
  </div>
</template>

<script>
  import CustomSelect from './CustomSelect.vue'

  export default {
    props: ['user'],
    components: {
      CustomSelect,
    },
    data() {
      return {
        continents: [
          { value: 'africa', text: 'Africa' },
          { value: 'america-north', text: 'America (North)' },
          { value: 'america-south', text: 'America (South)' },
          { value: 'asia', text: 'Asia' },
          { value: 'australia', text: 'Australia' },
          { value: 'europe', text: 'Europe' }
        ]
      };
    },
    methods: {
      updateUser() {
        //axios.post('/updateUser', this.user).then(() => { });
      },
      changedContinent(newContinent) {
        // Do something with the new selected continent like changing background relative to the selected continent
        console.log('changedContinent: ' + newContinent);
      }
    }
  }
</script>