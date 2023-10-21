import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/view/home.vue"; 
import Rules from "../components/view/rules.vue";  
import Score from "../components/view/result.vue";
import Login from "../components/view/login.vue";
import notfound from "../components/view/404.vue"


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/rule",
    name: "Rules",
    component: Rules,
  },
  {
    path: "/result",
    name: "Result",
    component: Score,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: notfound,
  },
];

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0
      }
    }
  },
  history: createWebHistory(),
  routes,
});



export default router;