<template>
    <section>
        <h2>Signup</h2>
        <form @submit.prevent="signupUser">
            <input placeholder="User Name" v-model="newUser.name" type="text">
            <input placeholder="Password" v-model="newUser.pass" type="password">
            <button>Signup</button>
        </form>
    </section>

</template>

<script>
export default {
    data(){
        return{
            newUser: {
                name:'',
                pass:''
            }
        }
    },
    methods:{
        signupUser(){
            console.log(this.newUser)
            this.newUser = {name:'', pass:''}
        }
    }

}
</script>

<style>

</style>
