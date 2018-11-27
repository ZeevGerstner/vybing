<template>
  <div class="room">
    <h1>Hello ROOM</h1>

    <youtube :video-id="videoId" :player-vars="playerVars" ref="youtube" @playing="playing"></youtube>
    <button @click="clickButton">Button</button>
    {{playerVars.start}}
    {{users.num}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoId: 'ZjJdp6jrBhM',
      playerVars: {
        autoplay: 1,
        start: 60,
      },
      currTime:{
        time:0
      },
      users:{
        num:0
      },
      // isVideoReady: false,
    }
  },
  methods: {
    playing() {
      console.log('\o/ we are watching!!!')
    },
    clickButton: function (data) {
      // $socket is socket.io-client instance
      this.$socket.emit('emit_method', data)
    },
    getTime(){
      var player = this.$refs.youtube.player
      return player.getCurrentTime()
    }
  },
   sockets: {
        connect: function () {
          this.$socket.emit('set-users')
            // console.log('socket connected')
        },
        getStatusTime: function () {
            // console.log('give me time!')
            this.getTime()
            .then((time) => {
              this.$socket.emit('setStatusTime',time) 
          })
        },
        setCurrTime: function(currTime){
          this.playerVars.start = currTime
          this.isVideoReady = true;
          console.log('this.playerVars.start: ', this.playerVars.start)
        },
        getUsers: function(users){
          console.log(users)
          this.users.num = users
        }
    },
  }








  // <button @click="getTime">Time</button>
  // <button @click="startPoint">Start</button>

</script>

