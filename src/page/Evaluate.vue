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
import axios from 'axios'
import '../assets/scss/evaluate.scss'

export default {
  name: "Evaluate",
  data () {
    return {
      answers:[],
      pages: 0,
      score: 0,
      results: [],
      answersKey: []
    }
  },
  async mounted () {
    await this.getAnswersKey()
    this.answers = this.$route.query.selectedAnswers
    this.pages = this.$route.query.pages
    this.fixList()
    this.checkAnswer()
  },
  methods: {
    async getAnswersKey () {
      await axios.get('http://localhost:3000/answerskey').then(res => {
        if(res.status == 200) {
          this.answersKey = res.data
        }
      }).catch ((err) => {
        console.log(err);
      })
      console.log("KJ", this.answersKey)
    },
    fixList () {
      var tempList1 = []
      var tempList2 = []
      for (var i = 0; i < this.pages; i++) {
        tempList1[i] = this.answers[i + 1]
        tempList2[i] = this.answersKey[i].answer
      }
      this.answers = tempList1
      this.answersKey = tempList2
    },
    checkAnswer () {
      for (var i = 0; i < this.pages; i++) {
        if (this.answers[i] === this.answersKey[i]) {
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
