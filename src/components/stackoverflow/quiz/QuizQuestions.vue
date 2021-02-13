<template>
  <div class="quiz-questions">
    <div class="jumbotron mt-3">
      <h1 class="mb-5">{{ quiz.title }}</h1>
      <hr>

      <question v-if="!showResults" :question="currentQuestion" @answer-selected="processAnswer" />

      <div class="mt-5">
        <button class="btn btn-primary" v-if="currentQuestionId > 1 && !showResults" @click="getPreviousQuestion">
          prev
        </button>
        <button v-if="!showResults" class="btn btn-secondary" @click="getNextQuestion">
          {{ nextButtonLabel }}
        </button>
      </div>

      <div v-if="showResults">
        <h3>Your Results</h3>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>QUESTION</th>
              <th>ANSWER</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(response, index) in responses" :key="index">
              <td>{{ getQuestionText(response.questionId) }}</td>
              <td>{{ getAnswerText(response.answerId) }}</td>
            </tr>
          </tbody>
        </table>

        <button class="btn btn-success" @click="playAgain">
          Play Again!
        </button>
      </div>
    </div>

  </div>
</template>

<script>
  import quiz from './quiz.js';
  import Question from '@/components/stackoverflow/quiz/Question'

  export default {
    components: {
      Question
    },
    data() {
      return {
        quiz: quiz,
        currentQuestionId: 1,
        currentAnswerId: 1,
        previousQuestionId: 0,
        responses: [],
        showResults: false,
        errors: [],
        error: ''
      }
    },
    computed: {
      currentQuestion() {
        return this.quiz.questions.find( question => {
          return question.id === this.currentQuestionId;
        })
      },
      nextQuestionId() {
        let retVal = 0;
        if (this.currentAnswerId > 0) {
          let tempAnswer = this.currentQuestion.answers.find( answer => {
            return answer.id === this.currentAnswerId;
          });
          retVal = tempAnswer.nextQuestionId;
        }
      
        return retVal;
      },
      lastQuestion() {
        return this.currentQuestion.answers[0].nextQuestionId === 0;
      },
      nextButtonLabel() {
        return this.lastQuestion ? 'Finish' : 'Next';
      }
    },
    methods: {
      getPreviousQuestion() {
        this.currentQuestionId = this.previousQuestionId;
      },
      getNextQuestion() {
        // TODO: Look for existing response for this question in case the 'Previous' button was pressed
        // If found, update answer
        
        // Store current question id and answer id in responses
        let response = { questionId: this.currentQuestionId, answerId: this.currentAnswerId };
        this.responses.push(response);

        if (this.lastQuestion) {
          this.showResults = true;
          return;
        }

        this.previousQuestionId = this.currentQuestionId;
        this.currentQuestionId = this.nextQuestionId;
      },
      getQuestionText(id) {
        let result = this.quiz.questions.find( question => {
          return question.id === id;
        });

        return result.text;
      },
      getAnswerText(id) {
        // NOTE: Since answers are currently limited to '1 = Yes' and '2 = No',
        // this method does not need to involve any look up
        return id === 1 ? 'Yes' : 'No';
      },
      processAnswer(selectedAnswerId) {
        this.currentAnswerId = selectedAnswerId;
      },
      score() {
        return 'TODO'
      },
      playAgain() {
        this.currentQuestionId = 1;
        this.showResults = false;
        this.responses = [];
      }
    }
  }
</script>