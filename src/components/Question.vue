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
        <input type="radio" name="choice" value="Scripting"> Scripting
        <br>
        <input type="radio" name="choice" value="Programming"> Programming
        <br>
        <input type="radio" name="choice" value="Application"> Application
        <br>
        <input type="radio" name="choice" value="None of These"> None of These
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
