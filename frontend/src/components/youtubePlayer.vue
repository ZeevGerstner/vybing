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
      videoId: '',
      playerVars: {
        start: 0,
        controls: 1,
      },
      playlist: [],
      lastPlayed: 0
    };
  },
  methods: {
    ready(ev) {
      this.setPlaylist();
      // this.loadVideos();
      this.setSong();
      // ev.loadVideoById(this.videoId)
      },
    playing() {},
    ended() {
      let song = this.playlist[0];
      this.playlist.splice(0, 1);
      this.playlist.push(song);
      this.loadVideos();
    },
    setPlaylist() {
      var playlist = this.$store.getters.getPlaylist;
      var newPlaylist = playlist.map(item => {
        return item.id;
      });
      
      this.playlist = newPlaylist;
      this.player.playVideo();

    },
    loadVideos() {
      this.player.loadPlaylist({
        playlist: this.playlist,
        startSeconds: this.playerVars.start
      });
    },
    setSong() {
      this.videoId = this.playlist[0];
      // var str = new String(this.videoId);
      // this.player.loadVideoById(str);
      this.playVideo();
    },
    async playVideo() {
      await this.player.playVideo();
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
      this.playerVars.start = Math.floor(currTime);
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
