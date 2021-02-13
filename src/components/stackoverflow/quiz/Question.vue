<template>
  <div class="question">
    <h4 class="mt-5 mb-3">{{ question.text }}</h4>

    <div class="form-check" v-for="(answer, idx) in question.answers" :key="idx">
      <input class="form-check-input" type="radio"
        :value="answer.id" v-model="answerId" @change="answerSelected">
      <label class="form-check-label">
        {{answer.text}}
      </label>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      question: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        answerId: 1
      }
    },
    watch:{
      question() {
        // Reset on new question
        this.answerId = 1;
      }
    },
    methods: {
      answerSelected() {
        this.$emit('answer-selected', this.answerId);
      }

    }
  }
</script>