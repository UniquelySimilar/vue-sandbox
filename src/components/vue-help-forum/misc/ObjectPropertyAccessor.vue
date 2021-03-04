<template>
  <div class="object-property-accessor">
    <h3>ObjectPropertyAccessor.vue</h3>
    <div v-for="(value, name, index) in item.data[0]" :key="index">
      {{ index }}. {{ name }}: {{ value }}
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        item: {
          data: {
            0: {
              "name": "John Wayne",
              "email": "theDuke@westernHeroes.tv",
            },
            1: {
              "name": "Clint Eastwood",
              "email": "goodBadUgly@westernHeroes.tv",
            },
          },
          count: 612,
          message: 'Cowboys Forever',
        },
      }
    }

  }
</script>