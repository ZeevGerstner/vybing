<template>
    <section class="createroom container">
        <h2 class="create-title">Create Room</h2>
        <form class="create-form" @submit.prevent="createRoom">
            <input ref="input" class="create-input" v-model="newRoom.name" placeholder="room name" type="text">
            <h2 class="create-title" v-if="errName">please enter a name!!</h2>

            <select class="create-select" v-model="newRoom.type">
                <option value="" disabled selected>Select a genre</option>
                <option value="Hip Hop">Hip Hop</option>
                <option value="Rock">Rock</option>
                <option value="Trance">Trance</option>
                <option value="Dub Step">DubStep</option>
                <option value="Techno">Techno</option>
                <option value="Funk">Funk</option>
                <option value="Trap">Trap</option>
                <option value="World">World</option>
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
                members: [],
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
            this.$router.push('/room/'+room._id)
        }
  },
  created(){
    this.$nextTick(() => {
      this.$refs.input.focus()
    }) 
  }

}
</script>

<style>

</style>
