<template>
  <div class="answer-box">
    <div v-if="answers" :key="updateUI" class = "list-box">
      <ol>
        <li v-for="answer in answers" :key="answer">
          {{ answer }}
        </li>
      </ol>
    </div>
  </div>  
</template>

<script>
import '../assets/scss/review.scss'

export default {
  name: "Review",
  props: {
    selectedAnswers: {
      type: Array,
      default: function () {
        return []
      }
    },
    pages: {
      type: Number,
      default: 0
    }  
  },
  data () {
    return {
      updateUI: false,
      answers:[],
    }
  },
  watch: {
    selectedAnswers () {
      this.updateReview()
    }
  },
  mounted () {
    this.createList()
    console.log("answers", this.selectedAnswers)
    console.log("max", this.pages)
  },
  methods: {
    createList () {
      for (var i = 0; i < this.pages; i++) {
        if (this.selectedAnswers[i + 1] !== "") {
          this.answers[i] = this.selectedAnswers[i + 1]
        } else {
          this.answers[i] = ""
        }
      }
      this.updateUI = !this.updateUI
    }, 
    updateReview () {
      for (var i = 1; i <=this.pages; i++) {
        console.log(this.selectedAnswers[i])
      }
    }
  } 
}


</script>