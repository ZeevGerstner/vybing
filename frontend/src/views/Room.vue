<template>
<<<<<<< HEAD
  <div class="room">
    <h1>Hello ROOM</h1>
    <youtube-player :playlist="playlist"/>
    <add-song/>
=======
  <div class="container room">
    <div class="left-room-container">
    <nav class="nav-room">
      <div class="room-title">
        <h2 class="room-name">ROOM Name</h2>
        <h4 class="room-creator">creator: <span>Amit</span></h4>
      </div>
      <div class="room-details">
        <div class="tag-genre room-genre">HIP HOP</div>

        <div class="room-icon">
          <img class="icon-img" src="../assets/imgs/LISTENERS-ICON.png">
          <h4 class="icon-count">304</h4>
        </div>
        <div class="room-icon">
          <img class="icon-img" src="../assets/imgs/EAR-ICON.png">
          <h4 class="icon-count">78</h4>
        </div>
      </div>
    </nav>
    <div class="room-player">
      
      <youtube-player></youtube-player>
    </div>
    <add-song></add-song>
    </div>
>>>>>>> 4c6968278099457e37c2fb49b64bd7257e186953
    <chat-room/>
    
  </div>
</template>



<script>
"use strict";
import addSong from "@/components/AddSong.vue";
import youtubePlayer from "@/components/YoutubePlayer.vue";
import chatRoom from "@/components/Chat.vue";

export default {
  data() {
    return {
      playlist:[]
    };
  },
  mounted() {
    // this.playlist = this.$store.getters.getPlaylist
    // console.log('!!!!!!!!!S', this.$store.getters.getPlaylist)
  },
  methods: {},
  sockets: {
    LOAD_PLAYLIST: function(playlist) {
      console.log(playlist)
      this.playlist = playlist
    }
  },
  created() {
    // this.$store.dispatch("SOCKET_GET_PLAYLIST");
    this.$socket.emit('getPlaylist')
  },
  components: {
    addSong,
    youtubePlayer,
    chatRoom
  }
};
</script>

