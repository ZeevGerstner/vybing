<template>
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
  // mounted() {
  //   this.playlist = this.$store.getters.getPlaylist
  // },
  methods: {},
  sockets: {
    SOCKET_LOAD_PLAYLIST: function(playlist) {
      console.log(playlist);
    }
  },
  created() {
    this.$store.dispatch("SOCKET_GET_PLAYLIST");
  },
  components: {
    addSong,
    youtubePlayer,
    chatRoom
  }
};
</script>

