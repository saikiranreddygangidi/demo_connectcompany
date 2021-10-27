<template>
  <div id="login">
    <center><h1>Login Form</h1></center>
    <div class="container">
      <label>Username : </label>
      <input
        type="text"
        placeholder="Enter Username"
        v-model="input.username"
        required
      />
      <br /><br />
      <label>Password : </label>
      <input
        type="password"
        placeholder="Enter Password"
        v-model="input.code"
        required
      />
      <br /><br />
      <button @click="login">Login</button><br />

      <span>{{ this.wizard.login }}</span>
    </div>
  </div>
</template>

<script>
// import CryptoJS from "crypto-js";

export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        code: "",
      },
      wizard: {},
    };
  },
  methods: {
    login() {
      console.log("in login ***********");
      console.log("data is ", this.input);

      // const iv = "sinasinasisinaaa";
      // //console.log("store Intern", this.$store);
      // const cipher = CryptoJS.AES.encrypt(
      //   this.imput.code,
      //   CryptoJS.enc.Utf8.parse("82f2ceed4c503896c8a291e560bd4325"),
      //   {
      //     iv: CryptoJS.enc.Utf8.parse(iv),
      //     mode: CryptoJS.mode.CBC,
      //   }
      // );

      // this.input.code = cipher.toString();
      this.$axios
        .post("/login", this.input)
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          console.log("error message is ", err);
          this.input.username = "";
          this.input.code = "";
          this.wizard.login = " Invalid Credentials. Enter correct details";
        });
    },
  },
};
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 100px;
  padding: 20px;
}

span {
  color: red;
}
</style>
