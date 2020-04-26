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
      timeout: false,
      minutes:3,
      second:1,
      time:"",
      timer:null,
    }
  },
  watch: {
    time () {
      this.isTimeout()
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
    },
    isTimeout () {
      if (this.time === "0 : 0") {
        this.timeout = true
        this.$parent.isTimeout()
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