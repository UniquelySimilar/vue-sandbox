<template>
  <div id="app" class="container">
    <joke-list />
  </div>
</template>

<script>
  import JokeList from '@/components/stackoverflow/update-div-contents/JokeList'

  export default {
    name: 'App',
    components: {
      JokeList
    },
    data() {
      return {
      }
    }
  }
</script>

<style>

</style>