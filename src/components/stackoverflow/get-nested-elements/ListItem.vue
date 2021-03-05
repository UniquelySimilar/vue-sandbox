<template>
  <li class="list-item">{{ itemText }}</li>
</template>

<script>
  export default {
    props: {
      itemText: {
        type: String,
        required: true
      }
    }
  }
</script>