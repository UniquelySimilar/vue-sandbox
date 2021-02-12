<template>
  <div class="quiz-questions">
    <div class="jumbotron mt-3">
      <h1 class="mb-5">{{ quiz.title }}</h1>
      <hr>

      <question :question="currentQuestion" @answer-selected="processAnswer" />

      <div class="mt-5">
        <button class="btn btn-primary" v-if="currentQuestionId > 1" @click="getPreviousQuestion">
          prev
        </button>
        <button v-if="currentQuestionId < finalQuestionId" class="btn btn-secondary" @click="getNextQuestion">
          next
        </button>
      </div>

      <div v-show="currentQuestionId === finalQuestionId">
        <h3>Your Results</h3>
        <p>
          You are: {{ score() }}
        </p>

        <button class="btn btn-success" @click="playAgain">
          Play Again!
        </button>
      </div>
    </div>

  </div>
</template>

<script>
  import quiz from './quiz.js';
  import Question from '@/components/stackoverflow/Question'

  export default {
    components: {
      Question
    },
    data() {
      return {
        quiz: quiz,
        currentQuestionId: 1,
        currentAnswerId: 0,
        previousQuestionId: 0,
        // response: {
        //   questionId: 0,
        //   answerId: 0
        // },
        responses: [],
        errors: [],
        error: ''
      }
    },
    computed: {
      currentQuestion() {
        return this.quiz.questions.find( question => {
          return question.id = this.currentQuestionId;
        })
      },
      finalQuestionId() {
        let questionIds = this.quiz.questions.map( question => question.id);
        return Math.max(...questionIds);
      },
      nextQuestionId() {
        let answer = this.currentQuestion.answers.find( answer => {
          return answer.id === this.currentAnswerId;
        });
        return answer.nextQuestionId;
      }
    },
    methods: {
      getPreviousQuestion() {
        this.currentQuestionId = this.previousQuestionId;
      },
      getNextQuestion() {
        // TODO: Store current question id and answer id in responses
        // Look for existing response for this question in case the previous button was pressed
        let response = { questionId: this.currentQuestionId, answerId: this.currentAnswerId };
        this.responses.push(response);
        this.previousQuestionId = this.currentQuestionId;
        this.currentQuestionId = this.nextQuestionId;
        console.log(this.responses);
      },
      processAnswer(selectedAnswerId) {
        //console.log('selected answer ID: ' + selectedAnswerId);
        this.currentAnswerId = selectedAnswerId;
      },
      score: function () {

      },
      playAgain() {
        this.currentQuestionId = 1;
      }
    }
  }
</script>