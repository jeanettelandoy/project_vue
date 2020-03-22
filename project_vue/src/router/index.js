import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LandingPage from "../views/LandingPage.vue";
import GameList from "../views/GameList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/LandingPage",
    name: "LandingPage",
    component: LandingPage
  },
  {
    path: "/GameList",
    name: "GameList",
    component: GameList
  },
  {
    path: "/GameView",
    name: "GameView",
    component: GameList
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
