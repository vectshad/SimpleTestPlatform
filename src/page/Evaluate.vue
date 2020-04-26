<template>
  <div id="evaluate">
    <h2> Evaluate</h2>
    <div class="evaluate-box">
      <div class = "list-box">
        <p id="text"> Answers</p>
        <ol>
          <li v-for="answer in answers" :key="answer">
            {{ answer }}
          </li>
        </ol>
      </div>
      <div class = "list-box">
        <p id="text"> Results</p>
        <div v-for="result in results" :key="result">
          {{ result }}
        </div>
      </div>
    </div>
    Your score {{ score }}
  </div>
</template>

<script>
import '../assets/scss/evaluate.scss'

export default {
  name: "Evaluate",
  data () {
    return {
      answers:[],
      pages: 0,
      score: 0,
      results: []
    }
  },
  mounted () {
    this.answers = this.$route.query.selectedAnswers
    this.pages = this.$route.query.pages
    this.fixList()
    this.checkAnswer()
  },
  methods: {
    fixList () {
      var tempList = []
      for (var i = 0; i < this.pages; i++) {
        tempList[i] = this.answers[i + 1]
      }
      this.answers = tempList
    },
    checkAnswer () {
      var answerKey = ["A", "B", "C", "D", "E"]
      for (var i = 0; i < this.pages; i++) {
        if (this.answers[i] === answerKey[i]) {
          this.results[i] = "True"
          this.score++
        } else {
          this.results[i] = "False"
        }
      }
    }
  }
}
</script>
