<template>
  <div id="secure">
    <h1 class="text-light">Welcome Page</h1>

    <div class="text-light">
      This is the connect company webPage which is used to connect different
      users to company directly and subscribe.
    </div>
    
<div class="btn-center">
      <b-button variant="primary" @click="logout()">
        Logout
        <font-awesome-icon icon="sign-in-alt" class="m-t-4" />
      </b-button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$store.dispatch("destroyToken").then(() => {
        this.$router.push({ name: "login" });
      });
    },
  },
};
</script>
<style scoped>
#secure {
  padding: 20px;
  margin-top: 10px;
}
</style>
