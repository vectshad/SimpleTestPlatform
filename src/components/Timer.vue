<template>
  <div id="timer">
    {{ time }}
  </div>
</template>

<script>
export default {
  name: "Timer",
  data () {
    return {
      minutes:1,
      second:10,
      time:"",
      timer:null,
    }
  },
  mounted () {
    this.start()
  },
	methods: {
    start () {
      if (this.second >= 0 && this.minutes >= 0 ) {
        this.timer = setInterval( () => {
        if (this.second > 0 && this.minutes >= 0) {
          this.second--
        } else if (this.minutes > 0) {
          this.minutes = this.minutes - 1
          this.second = 59
        } else {
          clearInterval(this.timer)
        }
        if (this.minutes === 0) {
          document.getElementById("timer").style.background= "red"
        }
        this.time = this.minutes + " : " + this.second
        }, 1000 )
      }
    }
  }
}
</script>

<style scoped>
#timer {
  font-size: 30px;
  font-weight: bold;
  margin-left: 50px;
}
</style>