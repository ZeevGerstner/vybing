<template>
  <section>
    <h2>Login</h2>
    <form @submit.prevent="loginUser">
      <input placeholder="User Name" v-model="user.name" type="text">
      <input placeholder="Password" v-model="user.pass" type="password">
      <button>Login</button>
    </form>
  </section>
</template>

<script>
export default {
    data(){
        return{
            user: {
                name:'',
                pass:''
            },
            isWorng : false
        }
    },
    methods:{
        loginUser(){
            // console.log(this.user)
            this.$store.dispatch({type: 'login',user: this.user})
            .then(user => {
                if(!user){
                    this.isWorng = true
                } else {
                    this.isWorng = false
                    this.user = {name:'', pass:''}
                }
            })
        }
    }

}
</script>

<style>

</style>
