<template>
  <section class="chat-container">
    <div class="chat">
      <h2 class="chat-title">ROOM CHAT</h2>
      <add-gif></add-gif>
      <div class="chat-line"></div>
      <div ref="msgs" class="chat-txts">
        <div class="chat-txt-container" v-for="(msg, idx) in msgs" :key="idx">
          <div class="chat-txt">
            <span :class="setColorToUser(msg)">{{msg.name}}</span>
            <span>: {{msg.txt}}</span>
          </div>
          <div class="chat-line"></div>
        </div>
      </div>
    </div>

    <form class="chat-form" @submit.prevent="sendMsg">
      <input
        class="chat-input"
        placeholder="Talk with people in this room"
        v-model="newMsg"
        type="text"
      >
    </form>
  </section>
</template>

<script>
import AddGif from './AddGif.vue'

export default {
  props:['room'],
  data() {
    return {
      msgs: [],
      newMsg: "",

    };
  },
  methods: {
    sendMsg() {
      this.$socket.emit("sendMsg", { txt: this.newMsg, name: this.getUser.name});
      this.newMsg = "";
    },
    setColorToUser(msg){
          if(msg.isMyUser === 'guest') return 'guest-chat-user'
          else if(msg.isMyUser === 'true') return 'chat-user'
          else return 'other-chat-user'
      }
  },
  sockets: {
    setNewMsg: function(newMsg) {
      if(newMsg.name === 'guest'){
         newMsg.isMyUser = 'guest';
      }else{
        if(newMsg.name !== this.getUser.name){
          newMsg.isMyUser = 'false';
        }else{
          newMsg.isMyUser = 'true';
        }
      }
      this.msgs.push(newMsg);
      
      //scroll the chat down
      this.$nextTick(() => {
          const elNewMsg = this.$refs.msgs.lastChild
          elNewMsg.scrollIntoView();
      });
    },
  },
  computed:{
      getUser(){
            var currUser = this.$store.getters.getCurrUser
            if(currUser) return currUser
            else return {name: 'guest'} 
        },
    },
    created(){
      this.$socket.emit('chatRoomJoined', this.room)
    },
    components: {
      AddGif
    }
};
</script>

<style>
</style>
