<template>
  <div class="player-container">
    <div class="youtube-container">
      <youtube
      width="200"
      height="113"
       :player-vars="playerVars"
        ref="youtube"
        @playing="playing"
        @ready="ready"
        @ended="ended"></youtube>
    </div>
    <div class="player-details">
        <h4 class="player-txt">NOW PLAYING:</h4>
        <h2 class="song-name">{{playlist[0].title}}</h2>
        <h4 class="player-txt" v-if="currAddBy">ADDED BY: {{currAddBy.name}}</h4>
    </div>

  </div>
</template>

<script>
export default {
  name: 'youtubePlayer',
  props:{
    playlist: Array
  },
  data() {
    return {
      videoId: '',
      currAddBy: '',
      playerVars: {
        start: 0,
        controls: 1,
        playsinline:1
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
      song = song[0]
      this.playlist.push(song)
      this.emitUpdatePlaylist()
      this.currSongTime = 0;
      this.setSong()
    },

    setSong() {
      if(this.playlist[0].addedBy) this.$socket.emit('getUserById', this.playlist[0].addedBy)
      else this.currAddBy = {name: 'guest'} 
      this.videoId = this.playlist[0].id
      this.player.loadVideoById(this.playlist[0].id, this.currSongTime);
    },
    emitUpdatePlaylist() {
      this.$emit('updatePlaylist', this.playlist)
    },
  },

  created() {
    this.$socket.emit('getTime');
  },
  sockets: {
    connect: function() {},
    getStatusTime: function() {
      this.player.getCurrentTime().then(time => {
        this.$socket.emit('setStatusTime', time);
      });
    },
    setCurrTime: function(currTime) {
      this.currSongTime = Math.floor(currTime);
    },
    setUserProfile: function (user) {
      this.currAddBy = user[0]
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    }
  }
};
</script>
