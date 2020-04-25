<template>
<div>
  <div class="question-box">
    {{ questionDesc}}
  </div>
  <div class="question-answer">
    <div class="question">
      <p> {{ question }} </p>
    </div>
    <div class="answer">
      <form>
        <label class="container">{{ answers[0] }}
          <input type="radio" name="radio" class="button" value="A" @click="onChecked($event)" >
          <span class="checkmark">A</span>
        </label>
        <label class="container"> {{ answers[1] }}
          <input type="radio" name="radio" class="button" value="B" @click="onChecked($event)">
          <span class="checkmark">B</span>
        </label>
        <label class="container"> {{ answers[2] }}
          <input type="radio" name="radio" class="button" value="C" @click="onChecked($event)">
          <span class="checkmark">C</span>
        </label>
        <label class="container"> {{ answers[3] }}
          <input type="radio" name="radio" class="button" value="D" @click="onChecked($event)">
          <span class="checkmark">D</span>
        </label>
      </form>
    </div>  
  </div>
</div>
</template>

<script>
import '../assets/scss/question.scss'

export default {
  name : "Question",
  props: {
    id: Number,
    questionDesc: String,
    question: String,
    answers: Array,
    answer: String
  },
  watch: {
    answers () {
     this.previousMark()
    }
  },
  data () {
    return {
      selectedAnswer: "",
    }
  },
  methods: {
    onChecked (event) {
        var optionText = event.target
        if (optionText.value === this.selectedAnswer && this.selectedAnswer !== "") {
          optionText.checked = false
          this.selectedAnswer = ""
        } else {
          this.selectedAnswer = optionText.value
        }
        // passing to parent
        this.$emit("answer", this.selectedAnswer)
    },
    previousMark() {
      this.emptyMark()
      var prevMark = this.answer
      console.log(prevMark)

      for (var i = 0; i < 4; i++) {
        if (document.getElementsByClassName('button')[i].value === prevMark){
          this.selectedAnswer = prevMark
          document.getElementsByClassName('button')[i].checked = true 
        }
      }
    },
    emptyMark () {
      for (var i = 0; i < 4; i++) {
        document.getElementsByClassName('button')[i].checked = false;
      }
      this.selectedAnswer = ""
    }
  }
}
</script>

