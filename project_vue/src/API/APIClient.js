import axios from "axios";

export default class APIClient {
  static getGames() {
    return new Promise((resolve, reject) => {
      // const apiClient = axios.create({
      axios({
        baseURL: `https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games`,
        //method: 'POST',
        withCredentials: false,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "user-key": "59aeb1b217ba38dc388929d3f9aa29da"
        },
        data:
          "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
      })
        .then(response => {
          resolve(response.data);
          console.log(response.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
