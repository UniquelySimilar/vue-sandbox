<template>
  <div class="two-filtered-lists">
    <h5>{{ title }}</h5>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>TYPE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.id">
          <td>{{ article.id }}</td>
          <td>{{ article.name }}</td>
          <td>{{ article.type }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      articles: {
        type: Array,
        required: true
      }
    }
  }
</script>