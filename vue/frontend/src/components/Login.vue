<template>
    <div class="row">
        <div class="col-sm-4">
        <h2 align="center">Login</h2>
        <form @submit.prevent="LoginData">
            <div class="form-group" align="left">
                <label>Username</label>
                <input type="text" v-model="user.username" class="form-control" placeholder="username">
            </div>
            <div class="form-group" align="left">
                <label>Password</label>
                <input type="password" v-model="user.password" class="form-control" placeholder="password">
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>    
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.use(axios)
export default {
    name: 'Login',
    data () {
        return {
        result: {},
        user: {
            username: '',
            password: ''
        }
        }
    },
    created(){
    },
    mounted(){
        console.log("mounted() called")
    },
    methods: {
        LoginData()
        {
            axios.post("http://localhost:3000/user/login", this.user)
            .then(
                ({data})=>{
                    console.log(data.status)
                    try {
                        if(data.status === true){
                            alert("Login Sucessfully")
                            this.$router.push({name: 'Home'})
                        } else {
                            alert('Login Failed')
                        }
                    } catch (error) {
                        alert('Error, please try again')
                    }
                }
            )
        }
    }
}
</script>
  
  