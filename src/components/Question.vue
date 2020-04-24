<template>
  <div class="question-box">
    {{ question }}
  </div>
</template>

<script>
export default {
  name : "Question",
  props: {
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
</style>
