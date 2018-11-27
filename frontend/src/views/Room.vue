<template>
  <div class="room">
    <h1>Hello ROOM</h1>
    <div>
      <youtube
        :video-id="videoId"
        :player-vars="playerVars"
        ref="youtube"
        @playing="playing"
      ></youtube>
    </div>
    {{playerVars.start}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoId: 'ZjJdp6jrBhM',
      playerVars: {
        start: 0
      },
    }
  },
  methods: {
    playing() {
      console.log('\o/ we are watching!!!')
    },
    async playVideo() {
      await this.player.playVideo()
    }
  },
  created() {
     this.$socket.emit('getTime') 
  },
   sockets: {
        connect: function () {
            // console.log('socket connected')
        },
        getStatusTime: function () {
            this.player.getCurrentTime()
            .then((time) => {
              this.$socket.emit('setStatusTime',time) 
          })
        },
        setCurrTime: function(currTime){
          this.playerVars.start = Math.floor(currTime)
          this.playVideo()
          console.log('more user', this.playerVars.start)
        },

    },
    computed: {
    player() {
      return this.$refs.youtube.player
    }
  }
}


</script>

