<template>
  <div>
    <NavBar></NavBar>
    <div class="row row-header"><h1>Games</h1></div>

    <div class="gamelistbody">
      <div v-for="game in games" class="[ col-sm-3 ]" v-bind:key="game.id">
        <router-link :to="'/games/' + game.id">
          <div class="card">
            <img :src="game.cover.url" alt="cover" />
            <div>{{ game.name }}</div>
            <div>
              {{ game.genres[0].name }}
            </div>
          </div>
          <!-- <Card
          class="card"
          v-bind:name="game.name"
          v-bind:category="game.category"
          v-bind:popularity="game.popularity"
          v-bind:cover="game.cover"
          ><img
            :src="game.cover.url.replace('t_thumb', 't_cover_big')"
            alt="cover"/></Card
      >-->
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
//import Card from "@/components/CardComponent.vue";
import NavBar from "@/components/NavBarComponent.vue";
import axios from "axios";

export default {
  name: "GameList",
  components: {
    //Card
    NavBar
  },
  data() {
    return {
      games: []
    };
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
      method: "POST",
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
.card {
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 20px;
  border: #73c09f solid 3px;
  background-color: white;
}

.card:hover,
.card:focus,
.card:active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
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
body {
  background-color: #e7e7e7;
}
</style>
