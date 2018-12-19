<template>
  <div class="player-container">
    <div class="youtube-container">
      <youtube
        width="200"
        height="113"
        :player-vars="playerVars"
        ref="youtube"
        @ready="ready"
        @ended="ended"
      ></youtube>
    </div>
    <div class="player-details">
      <h4 class="player-txt">NOW PLAYING:</h4>
      <h2 class="song-name">{{playlist[0].title}}</h2>
      <h4
        class="player-txt"
        v-if="currAddBy"
      >ADDED BY: {{currAddBy.name}}</h4>
    </div>
    <div class="btn-container">
      <button
        class="btn-player"
        @click.stop="toggleMute"
      ><i
          v-if="isMute"
          class="fas fa-volume-mute"
        ></i><i
          v-else
          class="fas fa-volume-off"
        ></i></button>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'youtubePlayer',
  props: {
    playlist: Array
  },
  data () {
    return {
      videoId: '',
      currAddBy: '',
      playerVars: {
        start: 0,
        controls: 1,
        playsinline: 1
      },
      currSongTime: null,
      createdTime: 0,
      isMute: false
    };
  },
  methods: {
    ready () {
      this.setSong();
    },
    ended () {
      var song = this.playlist.splice(0, 1);
      song = song[0]
      this.playlist.push(song)
      this.emitUpdatePlaylist()
      this.currSongTime = 0;
      this.setSong()
    },
    setSong () {
      if (this.playlist[0].addedBy !== 'guest') this.$socket.emit('getUserById', this.playlist[0].addedBy)
      else this.currAddBy = { name: 'guest' }
      this.videoId = this.playlist[0].id
      console.log('lt',this.currSongTime);
      
      this.player.loadVideoById(this.playlist[0].id, this.currSongTime);
    },
    emitUpdatePlaylist () {
      this.$emit('updatePlaylist', this.playlist)
    },
    toggleMute () {
      this.isMute = !this.isMute
      this.isMute ? this.player.mute() : this.player.unMute()
    }
  },
  created () {
    this.createdTime = Date.now()
  },
  sockets: {
    getStatusTime () {
      this.player.getCurrentTime().then(time => {
        console.log('get',Math.ceil(time));
        
        this.$socket.emit('setStatusTime', Math.ceil(time));
      });
    },
    setCurrTime (currTime) {
      this.currSongTime = currTime;
    },
    setUserProfile (user) {
      this.currAddBy = user[0]
    }
  },
  computed: {
    player () {
      return this.$refs.youtube.player;
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-container {
  position: absolute;
  bottom: 5px;
  right: 5px;
}

.btn-container button {
  cursor: pointer;
  font-size: 1.2em;
  color: #99cc00;
  outline: 0;
}
</style>
