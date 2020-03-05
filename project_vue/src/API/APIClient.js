
import axios from 'axios'


/*eslint-disable*/
const API_URL = 'https://api-v3.igdb.com'
const API_URL_V3 = 'https://api-v3.igdb.com/games/'
const USER_KEY = '59aeb1b217ba38dc388929d3f9aa29da'
/*eslint-enable*/

export default class APIClient {

  // Get the 30s most popular games from IGDB + V2
  /* static getGames () {
    return new Promise((resolve, reject) => {
      axios.get(`${API_URL}/games/?fields=name,cover,summary,url&popularity&order=popularity:desc&limit=30&category=0`, {
        headers: {
          "user-key": USER_KEY,
          Accept: "application/json"
        }
      })
        .then(response => {
          console.log(response.data)
          resolve(response.data)
        })
        .catch(e => {
          reject(e)
        })
    })
  } */

  // Get the 30s most popular games from IGDB + V3
  static getGames () {
    return new Promise((resolve, reject) => {
      axios({
        url: API_URL_V3,
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'user-key': USER_KEY
        },
        data: "fields name,cover,summary,url;sort popularity desc;limit 30;"
      })
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  // Get the 30s most popular games with a specific given name + V3
  static searchGames (gameName) {
    return new Promise((resolve, reject) => {
      axios({
        url: API_URL_V3,
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'user-key': USER_KEY
        },
        data: "search " + gameName + ";fields name,cover,summary,url;sort popularity desc;limit 30;"
      })
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  // Supposed to handle CORS with V3 + Doesn't work
  static registerHeader () {
    return new Promise((resolve, reject) => {
      axios({
        url: API_HEADER,
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'user-key': USER_KEY
        },
        data: {
          "api_header": {
            "header": "Access-Control-Allow-Origin",
            "value": "*"
          }
        }
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(err => {
          console.error(err);
        });
    });
  }
}