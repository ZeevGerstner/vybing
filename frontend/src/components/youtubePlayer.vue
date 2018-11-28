<template>
  <div class="player-container">
    <div class="youtube-container">
      <youtube
      width="200"
      height="113"
       :player-vars="playerVars"
        ref="youtube"
        :videoId="videoId"
        @playing="playing"
        @ready="ready"
        @ended="ended"></youtube>
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
  props: ['playlist'],
  name: "youtubePlayer",
  data() {
    return {
      videoId: '',
      playerVars: {
        start: 0,
        controls: 1,
      },
      currSongTime: 0
    };
  },
  methods: {
    ready(ev) {
      this.setSong();
      },

    playing() {},
    
    ended() {
      var song = this.playlist.splice(0, 1);
      this.playlist.push(song)
      this.emitPlaylist()
      this.setSong()
    },

    setSong() {
      var videoId = this.playlist[0].id;
      this.currSongTime = 0;
      this.player.loadVideoById(this.playlist[0].id, this.currSongTime);
    },
    emitPlaylist() {
      this.$socket.emit('updatePlaylist', this.playlist)
    }
  },
  created() {
    this.$socket.emit("getTime");
  },

  sockets: {
    connect: function() {},
    getStatusTime: function() {
      this.player.getCurrentTime().then(time => {
        this.$socket.emit("setStatusTime", time);
      });
    },
    setCurrTime: function(currTime) {
      this.currSongTime = Math.floor(currTime);
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
