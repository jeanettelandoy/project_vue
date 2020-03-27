<template>
  <div>
    <NavBar></NavBar>
    Game detail
    <h1>{{ game.name }}</h1>
  </div>
</template>

<script>
import NavBar from "@/components/NavBarComponent.vue";
import axios from "axios";

export default {
  components: {
    NavBar
  },

  //   data() {
  //     return {
  //       game
  //     };
  //   },

  created() {
    const app = this;
    // const routeid = this.$route.params;
    axios({
      url: `https://cors-anywhere.herokupp.com/https://api-v3.igdb.com/games/${this.response.game.id}?fields=name,genres.name,cover.url,popularity&order=popularity:desc&expand=genres`,
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
        console.log(response.data);
        return { game: response.data };
      })
      .catch(err => {
        console.error(err);
      });
  }
};
</script>
