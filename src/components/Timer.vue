<template>
  <div>
    {{ time }}
  </div>
</template>

<script>
export default {
  name: "Timer",
  data () {
    return {
      minutes:10,
      secondes:10,
      time:"",
      timer:null,
    }
  },
  mounted () {
    this.start()
  },
	methods: {
    start () {
      if (!this.timer) {
        this.timer = setInterval( () => {
          if (this.secondes > 0) {
            this.secondes--
          } else {
            this.minutes = this.minutes - 1
            this.secondes = 59
          }
          this.time = this.minutes + " : " + this.secondes 
        }, 1000 )
      }
    },
	}
}
</script>