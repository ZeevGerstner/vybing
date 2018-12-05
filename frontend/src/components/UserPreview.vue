<template>
    <section class="user-preview">
        <div v-if="user">
            <i @click="followUser" class="fas fa-user-plus icon-user-prev"></i>
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
        },
        followUser(){
            console.log('follow!')
        }
    }
}
</script>

<style>

</style>
