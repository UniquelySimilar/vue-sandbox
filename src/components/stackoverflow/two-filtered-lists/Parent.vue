<template>
  <div class="parent">
    <div class="row">
      <div class="col-md-6">
        <article-list title="Code Articles" :articles="codeArticles" />
      </div>
      <div class="col-md-6">
        <article-list title="Design Articles" :articles="designArticles" />
      </div>
    </div>
  </div>
</template>

<script>
  import ArticleList from './ArticleList.vue'

  export default {
    components: {
      ArticleList
    },
    data() {
      return {
        articles: [
          {
            id: 1,
            name: 'Article1',
            type: 'Code'
          },
          {
            id: 2,
            name: 'Article2',
            type: 'Design'
          },
          {
            id: 3,
            name: 'Article3',
            type: 'Code'
          },
          {
            id: 4,
            name: 'Article4',
            type: 'Design'
          },
        ]
      }
    },
    computed: {
      codeArticles() {
        return this.articles.filter(article => article.type === 'Code');
      },
      designArticles() {
        return this.articles.filter(article => article.type === 'Design');
      }
    }
  }
</script>