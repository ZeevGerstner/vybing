<template>
    <section class="profile container">
        <h2 class="profile-name">{{user.name}}</h2>
        <h2 class="profile-name">Created Room:</h2>
        <router-link v-for="(roomId,idx) in user.roomsCreated" :key="idx" :to="'/room/'+roomId">room {{idx}}</router-link>
        <h2 class="profile-name">Liked Room:</h2>
        <router-link v-for="(roomId,idx) in user.likedRooms" :key="roomId" :to="'/room/'+roomId">room {{idx}}</router-link>
    </section>
</template>

<script>
export default {
    data(){
        return{
            user: {}
        }
    },
    created(){
        const userId = this.$route.params.userId;
        this.$socket.emit('getUserById', userId)
    },
    computed:{
        
    },
    sockets:{
        setUserProfile: function(user){
            this.user = user
        }
    }
}
</script>

<style>

</style>
