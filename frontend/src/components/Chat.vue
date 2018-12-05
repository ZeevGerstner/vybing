<template>
  <section class="chat-container flex">
      <h2 class="chat-title">ROOM CHAT</h2>
      <div ref="msgs" class="chat-txts">
        <div class="chat-txt-container" v-for="(msg, idx) in msgs" :key="idx">
          <div class="chat-txt">
            <span :class="setColorToUser(msg)" @click="toggleUserPrev(idx)">{{msg.user.name}}</span>
            <user-preview v-show="msg.user._id" v-if="isUserPrev === idx" :user="msg.user"></user-preview>
            <span>: {{msg.txt}}</span>
          </div>
          <div class="chat-line"></div>
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
    <!-- <add-gif/> -->
  </section>
</template>

<script>
import AddGif from './AddGif.vue'
import userPreview from '@/components/UserPreview.vue'

export default {
  props:['room'],
  data() {
    return {
      msgs: [],
      newMsg: "",
      isUserPrev: null,

    };
  },
  methods: {
    sendMsg() {
      this.$socket.emit("sendMsg", { txt: this.newMsg, user: this.getUser});
      this.newMsg = "";
    },
    setColorToUser(msg){
          if(msg.isMyUser === 'guest') return 'guest-chat-user'
          else if(msg.isMyUser === 'true') return 'chat-user'
          else return 'other-chat-user'
      },
      toggleUserPrev(idx){
        console.log('idx',idx)
        if(this.isUserPrev === null){
          this.isUserPrev = idx;
        }else if(this.isUserPrev === idx){
          this.isUserPrev = null;
        } else{
          this.isUserPrev = idx
        }
      }
  },
  sockets: {
    setNewMsg: function(newMsg) {
      if(newMsg.user.name === 'guest'){
         newMsg.isMyUser = 'guest';
      }else{
        if(newMsg.user.name !== this.getUser.name){
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
      AddGif,
      userPreview
    }
};
</script>

<style>
</style>
