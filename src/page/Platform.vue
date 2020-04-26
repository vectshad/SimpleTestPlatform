<template>
  <div id="app">
    <div class="side">
     <div>
       <Timer/>
    </div>
      <div>
        <Review
          :pages="maxPage"
          :selectedAnswers="allAnswer"
          :key="updateUI"
        />
      </div>  
    </div>
    <div class="main">
      <div class="row">
        <div class="column">
          {{ title }} 
        </div>
        <div class="column">
          <a class="round" @click="changePage('prev')"> &#8249;</a> 
          {{ page }}
          <a class="round" @click="changePage('next')"> &#8250; </a>
        </div>  
      </div>
      <div>
        <Question
          v-on:answer="onAnswerClick"
          :id="answerID"
          :questionDesc="questionText" 
          :question="quest" 
          :answers="answerList"
          :answer="allAnswer[answerID]"
        />
      </div>
      <div>
        <button class="btn-finish" @click="finish()">Finish</button>
        <PopUp
          v-if="popUp"
          v-on:status="onFinishClick"
          />
      </div>
    </div>
  </div>
</template>

<script>
import Question from '../components/Question.vue'
import Review from '../components/Review.vue'
import Timer from '../components/Timer.vue'
import PopUp from '../components/PopUp.vue'
import axios from 'axios'

import '../assets/scss/platform.scss'

export default {
  name: 'Platform',
  components: {
    Question,
    Review,
    Timer,
    PopUp
  },
  data () {
    return {
      updateUI: false,
      popUp: false,
      answerID: 1,
      questionText: "",
      quest: "",
      answerList: [],
      page: 1,
      maxPage : 1,
      title: "TPS - Penalaran Umum",
      allAnswer: []
    }
  },
  watch: {
    async page () {
     await this.onLoad()
    },
  },
  async mounted () {
    await this.onLoad()
  },
  methods: {
    async onLoad () {
      await axios.get('http://localhost:3000/questions').then(res => {
        if(res.status == 200) {
          this.answerID = res.data[this.page - 1].id
          this.maxPage = res.data.length
          this.questionText = res.data[this.page - 1].questionDescription
          this.quest = res.data[this.page - 1].question
          this.answerList = res.data[this.page - 1].answers
        }
      }).catch ((err) => {
        console.log(err);
      })
      this.updateUI = !this.updateUI
    },
    changePage (event) {
      if (event === "next" && this.page < this.maxPage) {
        this.page = this.page + 1
      } else if (event === "prev" && this.page > 1) {
        this.page = this.page - 1
      }
    },
    isTimeout () {
      this.$router.push({ name: "Evaluate", query: {pages: this.maxPage, selectedAnswers: this.allAnswer}})
    },
    onAnswerClick (answer) {
      this.allAnswer[this.page] = answer
      console.log(this.allAnswer)
      this.updateUI = !this.updateUI
    },
    finish () {
      this.popUp = !this.popUp
    },
    onFinishClick (status) {
      if (!status) {
        this.popUp = false;
      } else {
        this.popUp = false;
        this.$router.push({ name: "Evaluate", query: {pages: this.maxPage, selectedAnswers: this.allAnswer}})
      }
    }
  }
}
</script>

