<template>
  <div>
    <NavBar></NavBar>
    <div class="container-fluid" style="padding: 20px;">
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
              <button type="button" class="btn thebutton">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-1">
        <button type="button" class="btn thebutton">Go back to Games</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBarComponent.vue";
import axios from "axios";

export default {
  components: {
    NavBar
  },

  data() {
    return {
      game: []
    };
  },
  created() {
    const app = this;
    let routeid = this.$route.params.id;

    // const segment = new URL(window.location.href).pathname
    //   .split("/")
    //   .filter(Boolean)
    //   .pop();
    // console.log(segment);
    axios({
      url:
        "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games/" +
        routeid.toString() +
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
        console.log(response.data);
        // return {
        //   game: response.data[0]
        // };
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
}
</style>
