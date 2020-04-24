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
        <label class="container">One
          <input type="radio" name="radio" value="A" @change="onChecked($event)">
          <span class="checkmark">A</span>
        </label>
        <label class="container">Two
          <input type="radio" name="radio" value="B" @change="onChecked($event)">
          <span class="checkmark">B</span>
        </label>
        <label class="container">Three
          <input type="radio" name="radio" value="C" @change="onChecked($event)">
          <span class="checkmark">C</span>
        </label>
        <label class="container">Four
          <input type="radio" name="radio" value="D" @change="onChecked($event)">
          <span class="checkmark">D</span>
        </label>
      </form>
    </div>  
  </div>
</div>
</template>

<script>
export default {
  name : "Question",
  props: {
    questionDesc: String,
    question: String
  },
  methods: {
    onChecked(event) {
        var optionText = event.target.value;
        console.log(optionText);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: block;
  position: relative;
  padding-left: 45px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 15px;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  background-color: #eee;
  border-radius: 50%;
  text-align: center;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}
.question-box {
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  width: 600px;
  border: 1px solid lightgray;
  padding: 20px;
  margin: 20px;
  text-align: left;
}

.question-answer {
  margin: 20px;
  width: 650px;
  text-align: left;
}
.p.question {
  font-weight: bold;
}
</style>
