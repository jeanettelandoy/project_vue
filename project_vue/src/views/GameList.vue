<template>
  <div>
    <NavBar :cart="cart" @STORAGE_KEY="UpdateCart"> </NavBar>
    <div class="jumbotron">
      <h1>Games</h1>
      <br />
      <h3>Lets play</h3>
    </div>
    <div class="gamelistbody">
      <div v-for="game in games" class="[ col-sm-3 ]" v-bind:key="game.id">
        <router-link :to="'/games/' + game.id">
          <div class="card">
            <img
              :src="game.cover.url.replace('t_thumb', 't_cover_big')"
              alt="cover"
            />
            <h3>{{ game.name }}</h3>
            <h5>Genre: {{ game.genres[0].name }}</h5>
            <h5>Game id: {{ game.id }}</h5>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBarComponent.vue";
import axios from "axios";

const STORAGE_KEY = "cart-storeage";

export default {
  name: "GameList",
  components: {
    NavBar
  },
  data() {
    return {
      games: [],
      cart: []
    };
  },
  props: ["id"],
  methods: {
    AddToCart(id) {
      this.cart.push(id);
      this.$emit(STORAGE_KEY, id);
      console.log(id);
    },

    UpdateCart(id) {
      localStorage.getItem(this.cart);
      this.cart.push(id);
    }
  },
  // beforeMount: function() {
  //   const app = this;
  //   if (!sessionStorage.getItem("sessionID")) {
  //     app.$router.push({ name: "LandingPage" });
  //   }
  // },
  created() {
    const app = this;

    axios({
      url:
        "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games/?fields=name,genres.name,cover.url,popularity&order=popularity:desc&expand=genres",
      method: "GET",
      headers: {
        Accept: "application/json",
        "user-key": "59aeb1b217ba38dc388929d3f9aa29da"
      },
      data:
        "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
    })
      .then(response => {
        app.games = response.data;
        console.log(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>

<style scoped>
h1 {
  font-family: "Courier New", Courier, monospace;
  font-weight: 700;
  color: #fff;
}
h2,
h3,
h4,
h5 {
  font-family: "Courier New", Courier, monospace;
}
p {
  font-family: Arial, Helvetica, sans-serif;
}
.card {
  padding: 5px;
  max-width: 350px;
  margin: auto;
  border: none;
  margin-top: 20px;
  border-radius: 20px;
  background-color: white;
  color: #193031;
  z-index: 20;
  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.13);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
}
img {
  border-radius: 10%;
  max-width: 250px;
}

.card:hover,
.card:focus,
.card:active {
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
  z-index: 20;
  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.13);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
}
.row-header {
  padding-top: 20px;
  padding-bottom: 20px;
}
.jumbotron {
  background-image: url("../assets/bilde2.png");
  color: white;
  height: 500px;
  align-self: baseline;
}
</style>
