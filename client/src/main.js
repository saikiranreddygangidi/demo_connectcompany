import Vue from "vue";
import App from "./App.vue";
import Router from "./router";
import axios from "axios";

Vue.prototype.$axios = axios.create({
  //baseURL: `${process.env.API_BASE_URL}`,
  baseURL: "https://connectcompanyapi.herokuapp.com/connectcompany/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
Vue.config.productionTip = false;

new Vue({
  router: Router,
  render: (h) => h(App),
}).$mount("#app");
