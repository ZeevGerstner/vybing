<template>
  <div class="player-container">
    <div class="youtube-container">
      <youtube
      width="200"
      height="113"
       :player-vars="playerVars"
        ref="youtube" @playing="playing"
         @ready="ready"></youtube>
    </div>
    <div class="player-details">
        <h4 class="player-txt">NOW PLAYING:</h4>
        <h2 class="song-name">KOKO SONG</h2>
        <h4 class="player-txt">ADDED BY: <span>AMIT</span></h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "youtubePlayer",
  data() {
    return {
      playerVars: {
        start: 0,
        controls: 1,
      },

      playlist: ["iJQR3s2Py6U", "iJQR3s2Py6U", "cOV-8-c15W0"]
    };
  },
  methods: {
    ready() {
      console.log("ready");
      this.player.loadPlaylist({
        playlist: this.playlist,
        startSeconds: this.playerVars.start,
        // index:1,
      });
    },
    playing() {
      console.log("o/ we are watching!!!");
    }
  },
  created() {
    this.$socket.emit("getPlaylist");
    this.$socket.emit("getTime");
  },
  sockets: {
    connect: function() {
      // console.log('socket connected')
    },
    getStatusTime: function() {
      this.player.getCurrentTime().then(time => {
        this.$socket.emit("setStatusTime", time);
      });
    },
    setCurrTime: function(currTime) {
      this.playerVars.start = Math.floor(currTime);
      // console.log("more user", this.playerVars.start);
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    }
  }
};
</script>

<style scoped lang="scss">
search-res {
  width: 80vw;
}


</style>
