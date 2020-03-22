<template>
  <div class="[ row ]">
    <h1>Events Listing</h1>
    <!-- <router-link :to="{ name: 'card-show', params: { id: '1' } }"
      >Show Event #1</router-link
    > -->
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
import Card from "@/components/CardComponent.vue";
import axios from "axios";

export default {
  name: "GameView",
  components: {
    Card
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
      url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
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

<style scoped></style>
