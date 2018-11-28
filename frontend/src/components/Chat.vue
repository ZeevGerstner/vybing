<template>
    <section>
        <h2>chat!</h2>
        <div v-for="(msg, idx) in msgs" :key="idx">{{msg.txt}}</div>


        <form @submit.prevent="sendMsg">
            <input placeholder="Talk with people in this room" v-model="newMsg" type="text">
            <button>send</button>
        </form>
    </section>
</template>

<script>
export default {
    data(){
        return{
            msgs: [],
            newMsg: ''
        }
    },
    methods:{
        sendMsg(){
            this.$socket.emit('sendMsg', {txt: this.newMsg}) 
            this.newMsg = ''
        },
        
    },
    sockets: {
        setNewMsg: function (newMsg){
            this.msgs.push(newMsg)
        }
    }
}
</script>

<style>

</style>
