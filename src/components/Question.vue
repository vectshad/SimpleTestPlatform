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
        <label class="container">{{ answer[0] }}
          <input type="radio" name="radio" value="A" @click="onChecked($event)">
          <span class="checkmark">A</span>
        </label>
        <label class="container"> {{ answer[1] }}
          <input type="radio" name="radio" value="B" @click="onChecked($event)">
          <span class="checkmark">B</span>
        </label>
        <label class="container"> {{ answer[2] }}
          <input type="radio" name="radio" value="C" @click="onChecked($event)">
          <span class="checkmark">C</span>
        </label>
        <label class="container"> {{ answer[3] }}
          <input type="radio" name="radio" value="D" @click="onChecked($event)">
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
    questionDesc: String,
    question: String,
    answer: String
  },
  data() {
    return {
      selectedAnswer: ""
    }
  },
  methods: {
    onChecked(event) {
        var optionText = event.target
        if (optionText.value === this.selectedAnswer) {
          optionText.checked = false
          this.selectedAnswer = ""
        } else {
        this.selectedAnswer = optionText.value
        console.log(this.selectedAnswer)
        }
    }
  }
}
</script>

