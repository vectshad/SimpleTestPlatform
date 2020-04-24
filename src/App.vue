<template>
  <div id="app">
    <Question :questionDesc="questionText" :question="quest" :answer="answerList" />
  </div>
</template>

<script>
import Question from './components/Question.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Question
  },
  data () {
    return {
      questionText : "",
      quest: "",
      answerList: [],
    }
  },
  mounted () {
    this.onLoad()
  },
  methods: {
    onLoad () {
      axios.get('http://localhost:3000/questions').then(res => {
        if(res.status == 200) {
          this.questionText = res.data[0].questionDescription
          this.quest = res.data[0].question
          this.answerList = res.data[0].answers
          console.log(res.data[0].question)
        }
      }).catch ((err) => {
        console.log(err);
      })
      console.log(this.payloads)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
