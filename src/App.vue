<template>
  <div id="app" class="container">
    <quiz-questions />
  </div>
</template>

<script>
  import QuizQuestions from '@/components/stackoverflow/quiz/QuizQuestions'
  
  export default {
    name: 'App',
    components: {
      QuizQuestions
    }
  }
</script>

<style>

</style>
