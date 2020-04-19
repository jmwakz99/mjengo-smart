import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Contact from "../components/Pages/Contact.vue";
import News from "../components/Pages/News.vue";
import ResetPassword from "../components/User/ResetPassword.vue";

import Signup from "../components/User/Signup.vue";
import Signin from "../components/User/Signin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },

  {
    path: "/signin",
    name: "SignIn",
    component: Signin,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: Signup,
  },
  {
    path: "/reset",
    name: "resetPassword",
    component: ResetPassword,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
