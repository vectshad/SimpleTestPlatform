<template>
  <div id="app">
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
        v-model="page"
        :questionDesc="questionText" 
        :question="quest" 
        :answer="answerList"
      />
    </div>
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
  props: {
    title: {
      default: "TPS - Penalaran Umum",
    }
  },
  data () {
    return {
      page: 1,
      questionText : "",
      quest: "",
      answerList: [],
    }
  },
  watch: {
    page () {
      this.onLoad()
    }
  },
  mounted () {
    this.onLoad()
  },
  methods: {
    onLoad () {
      axios.get('http://localhost:3000/questions').then(res => {
        if(res.status == 200) {
          console.log(res.data.length)
          this.questionText = res.data[this.page - 1].questionDescription
          this.quest = res.data[this.page - 1].question
          this.answerList = res.data[this.page - 1].answers
        }
      }).catch ((err) => {
        console.log(err);
      })
    },
    changePage (event) {
      if (event === "next" ) {
        this.page = this.page + 1
      } else if (event === "prev" && this.page > 1) {
        this.page = this.page - 1
      }
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

.row {
	margin:20px;
	text-align:left;
	width:100%;
	font-size:0.1px;/* Kill white-space*/
}
.column {
	display:inline-block;
	padding:5px;
	vertical-align:top;
	font-size:22px;
  margin-right: 400px;
}
.row:after{
	content:"";
	display:inline-block;
	height:1px;
	width:0;
	font-size:0;
	line-height:0;
	overflow:hidden;
	margin: 0 100% 0 0;
}

a {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  background-color: #ddd;
}

a:hover {
  background-color: #4CAF50;
  color: black;
}

.round {
  border-radius: 50%;
}
</style>
