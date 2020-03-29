<template>
  <div>
    <NavBar :id="id" @addtocart="UpdateCart"></NavBar>
    <h1>Cart</h1>
    <h3 :id="id" @addtocart="UpdateCart">In cart: {{ cart }}</h3>
    <div
      class="row"
      style="display: inline"
      :id="id"
      @addtocart="UpdateCart"
      v-for="item in cart[0]"
      v-bind:key="item.id"
    >
      <div class="col-md-10" style="display: inline">
        item id skal hit
        {{ item.id }}
      </div>
      <button
        style="display: inline"
        type="button"
        class="btn btn-default thebutton"
        v-on:click="RemoveFromCart(item.id)"
      >
        Remove from cart
      </button>
    </div>
    <div class="col-md-12" style="margin: 20px">
      <router-link :to="'/GameList/'">
        <button type="button" class="btn thebutton">
          Go back to Games
        </button></router-link
      >
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBarComponent.vue";
import axios from "axios";

const STORAGE_KEY = "cart-storeage";

export default {
  name: "Cart",
  components: {
    NavBar
  },
  props: ["id"],
  methods: {
    RemoveFromCart(id) {
      this.cart -= 1;
      this.cart.splice(this.cart.indexOf(id), 1);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.cart));
      localStorage.removeItem();
      console.log(id);
    },
    UpdateCart(id) {
      this.cart.push(id);
      localStorage.setItem(STORAGE_KEY, this.cart);
    }
  },
  data() {
    return {
      game: [],
      cart: []
    };
  },
  created() {
    this.cart = JSON.parse(localStorage.getItem(STORAGE_KEY));

    const app = this;

    axios({
      url:
        "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games/" +
        "/?fields=name,genres.name,cover.url,popularity&order=popularity:desc&expand=genres",
      method: "GET",
      headers: {
        Accept: "application/json",
        "user-key": "59aeb1b217ba38dc388929d3f9aa29da"
      },
      data:
        "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
    })
      .then(response => {
        app.game = response.data;
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>
<style scoped>
.thebutton {
  background-color: #193031;
  color: white;
  padding: 10px;
  border: none;
}
</style>
