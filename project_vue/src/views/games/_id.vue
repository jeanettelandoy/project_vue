<template>
  <div>
    <NavBar :cart="cart" @STORAGE_KEY="UpdateCart"> </NavBar>

    <div class="container-fluid" style="padding: 20px;">
      <!-- <h1 @addtocart="UpdateCart">add to cart {{ cart.length }} {{ cart }}</h1> -->
      <div class="card mb-3" style="max-width: 840px;">
        <div class="row">
          <div class="col-md-4" style="padding: 20px;">
            <img
              :src="game[0].cover.url.replace('t_thumb', 't_cover_big')"
              alt="cover"
              class="card-img"
            />
          </div>
          <div class="col-md-8" style="padding: 10px;">
            <div class="card-body">
              <h2 class="card-title">{{ game[0].name }}</h2>

              <p class="card-text">{{ game[0].summary }}</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
              <button
                type="button"
                class="btn thebutton"
                v-on:click="AddToCart(game[0].id)"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <router-link :to="'/GameList/'">
          <button type="button" class="btn thebutton">
            Go back to Games
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBarComponent.vue";
import axios from "axios";

const STORAGE_KEY = "cart-storeage";
export default {
  components: {
    NavBar
  },
  data: function() {
    return {
      game: [0],
      cart: []
    };
  },
  mounted() {},
  props: ["id"],
  methods: {
    AddToCart(id) {
      this.cart.push(id);
      //this.$emit("addtocart", id);

      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.cart));
      this.$emit(STORAGE_KEY, id);
    },
    UpdateCart(id) {
      this.cart.push(id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.cart));
      this.$emit(STORAGE_KEY, id);
    }
  },
  created() {
    this.cart = JSON.parse(localStorage.getItem(STORAGE_KEY));

    const app = this;
    let routeid = this.$route.params.id;

    axios({
      url:
        "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games/" +
        routeid.toString() +
        "/?fields=name,genres.name,cover.url,summary,popularity&order=popularity:desc&expand=genres",
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
<style>
.thebutton {
  background-color: #193031;
  color: white;
  padding: 10px;
}
</style>
