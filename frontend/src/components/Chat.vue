<template>
  <section class="chat-container">
    <div class="chat">
      <h2 class="chat-title">ROOM CHAT</h2>
      <div class="chat-line"></div>
      <div ref="msgs" class="chat-txts">
        <div class="chat-txt-container" v-for="(msg, idx) in msgs" :key="idx">
          <div class="chat-txt">
            <span class="chat-user">{{msg.name}}</span>
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
export default {
  data() {
    return {
      msgs: [],
      newMsg: ""
    };
  },
  methods: {
    sendMsg() {
      this.$socket.emit("sendMsg", { txt: this.newMsg, name: this.getUser.name });
      this.newMsg = "";
    }
  },
  sockets: {
    setNewMsg: function(newMsg) {
      this.msgs.push(newMsg);
      
      //scroll the chat down
      this.$nextTick(() => {
          const elNewMsg = this.$refs.msgs.lastChild
          elNewMsg.scrollIntoView();
      });
    },
    computed:{
      getUser(){
            return this.$store.getters.getCurrUser
        },
    }
  }
};
</script>

<style>
</style>
