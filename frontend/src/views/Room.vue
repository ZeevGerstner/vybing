<template>
  <div v-if="room" class="container room">
    <div class="left-room-container">
    <nav class="nav-room">
      <div class="room-title">
        <h2 class="room-name">{{room.name}}</h2>
        <h4 class="room-creator">creator: <span>{{room.admin}}</span></h4>
      </div>
      <div class="room-details">
        <div class="tag-genre room-genre">{{room.type}}</div>

        <div class="room-icon">
          <img class="icon-img" src="../assets/imgs/LISTENERS-ICON.png">
          <h4 class="icon-count">{{room.members}}</h4>
        </div>
        <div class="room-icon ">
          <img class="icon-img" src="../assets/imgs/EAR-ICON.png">
          <h4 class="icon-count">{{room.likes}}</h4>
        </div>
      </div>
    </nav>
    <div class="room-player">
      
      <youtube-player :playlist="room.playlist"></youtube-player>
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
      room: {},
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
    const roomId = this.$route.params.roomId;
    this.$socket.emit('getRoomById', roomId)
    // this.$store.dispatch("SOCKET_GET_PLAYLIST");
    this.$socket.emit('getPlaylist')
  },
  sockets: {
    setRoom: function(room){
      this.room = room
      console.log(room)
    }
  },
  components: {
    addSong,
    youtubePlayer,
    chatRoom
  }
};
</script>

