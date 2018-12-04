<template>
    <section class="createroom container">
        <h2 class="create-title">Create Room</h2>
        <form class="create-form" @submit.prevent="createRoom">
            <input ref="input" class="create-input" v-model="newRoom.name" placeholder="room name" type="text">
            <h2 class="create-title" v-if="errName">please enter a name!!</h2>

            <select class="create-select" v-model="newRoom.type">
                <option value="" disabled selected>Select a genre</option>
                <option v-for="(genre, idx) in getGenre" :key="idx" :value="genre">{{genre}}</option>
                
            </select>
            <h2 class="create-title" v-if="errType">please select a type!!</h2>
            <button class="tag-genre create-btn">Create!</button>
        </form>
    </section>
</template>

<script>
export default {
    data(){
        return{
            newRoom: {
                name: '',
                type: '',
                admin: '',
                likes: 0,
                listeners: [],
                playlist: [],
            },
            errName: false,
            errType: false,
        }
    },
    methods:{
        createRoom(){
            if(!this.newRoom.name){
                this.errName = true
                return
            }
            if(!this.newRoom.type){
                this.errType = true
                return
            }
            this.$socket.emit('createRoom', this.newRoom)
                
        }
    },
    sockets: {
        setNewRoom: function(room){
            let user = this.getUser
            this.$socket.emit('updateRoomsCreatedUser', user, room._id)
            this.$router.push('/room/'+room._id)
        }
  },
  created(){
      if(!this.getUser._id){
          this.$router.push('/Signup')
    }else{
        this.$nextTick(() => {
            this.$refs.input.focus()
        }) 
        this.newRoom.admin = this.getUser._id
    }
  },
  computed:{
      getGenre(){
          return this.$store.getters.getGenre
      },
      getUser(){
            var currUser = this.$store.getters.getCurrUser
            if(currUser) return currUser
            else return {name: 'guest'} 
        },
  }

}
</script>

<style>

</style>
