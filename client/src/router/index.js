import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from "../components/views/login.vue"
import RegisterComponent from "../components/views/register.vue"
import HomeComponent from "../components/views/home.vue"
import WelcomeComponent from "../components/views/welcome.vue"



import SecureComponent from "../components/views/secure.vue"

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: {
                name: "welcome"
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: "/home",
            name: "home",
            component: HomeComponent
        },
        {
            path: "/register",
            name: "register",
            component: RegisterComponent
        },
        {
            path: "/secure",
            name: "secure",
            component: SecureComponent
        },
        {
            path: "/Welcome",
            name: "welcome",
            component: WelcomeComponent
        }
    ]
})