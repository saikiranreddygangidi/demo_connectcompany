<template>
    <div id="register">
    <center> <h1> Login Form </h1> </center>   
        <div class="container">   
        <label>Email : </label>   
            <input type="text" placeholder="Enter Username" v-model="input.email"  required> <br><br>
            <label>Username : </label>   
            <input type="text" placeholder="Enter Username" v-model="input.username"  required> <br><br>
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" v-model="input.code" required>  <br><br>
            <button @click="register">Register</button>  <span>&nbsp; </span>
             <router-link to="/login" class="border">
          <button>Login </button>
        </router-link>
       <span> {{this.wizard.register}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Register',
        data() {
            return {
                input:{
                    email:"",
                    username: "",
                    code: ""
                },
                wizard:{}
            }
        },
         methods: {
            register() {
                console.log(this.input)
                 this.$axios
        .post("/register", this.input)
        .then((response) => {
console.log(response);
this.input.email="";this.input.username="";this.input.code="";
this.wizard.register =" successfully uploaded data. you can login now !";
        })
        .catch((err) =>{
            console.log(err);
            this.wizard.register =" error in uploading data";

        })
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
