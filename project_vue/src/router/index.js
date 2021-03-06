import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LandingPage from "../views/LandingPage.vue";
import GameList from "../views/GameList.vue";
import _id from "../views/games/_id.vue";
import Cart from "../views/Cart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
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
    path: "/games/:id",
    name: "_id",
    component: _id
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
