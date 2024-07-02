<template>
    <div class="row">
        <div class="col-sm-4">
        <h2 align="center">Registration</h2>
        <form @submit.prevent="saveData">
            <div class="form-group" align="left">
                <label>Name</label>
                <input type="text" v-model="user.name" class="form-control" placeholder="name">
            </div>
            <div class="form-group" align="left">
                <label>Username</label>
                <input type="text" v-model="user.username" class="form-control" placeholder="username">
            </div>
            <div class="form-group" align="left">
                <label>Password</label>
                <input type="password" v-model="user.password" class="form-control" placeholder="password">
            </div>
            <button type="submit" class="btn btn-primary">Save</button>
        </form>    
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.use(axios)
export default {
    name: 'Register',
    data () {
        return {
        result: {},
        user: {
            id: '',
            name: '',
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
        saveData()
        {
            axios.post("http://localhost:3000/user/register", this.user)
            .then(
                ({data})=>{
                    alert("saved")
                }
            )
        }
    }
}
</script>
  
  