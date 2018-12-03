<template>
    <section class="user-preview">
        <div v-if="user">
            <h2 class="det-user-prev">{{user.name}}</h2>
            <h2 class="det-user-prev">created: {{user.roomsCreatedIds.length}}</h2>
            <i class="fas fa-user-plus icon-user-prev"></i>
            <i @click="goToUserProfile" class="fas fa-info-circle icon-user-prev"></i>
            <i class="fas fa-comments icon-user-prev"></i>
        </div>
    </section>
</template>

<script>
export default {
    props:['user'],
    created(){
        console.log('userPrev:::',this.user)
    },
    data(){
        return{
        }
    },
    methods:{
        goToUserProfile(){
            this.$router.push('/profile/'+this.user._id)
        }
    }
}
</script>

<style>

</style>
