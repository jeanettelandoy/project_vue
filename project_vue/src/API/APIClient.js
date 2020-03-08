



/*eslint-disable*/
const API_URL = 'https://api-v3.igdb.com'
const API_URL_V3 = 'https://api-v3.igdb.com/games/'
const USER_KEY = '59aeb1b217ba38dc388929d3f9aa29da'
/*eslint-enable*/

export default class APIClient {

  // Get the 30s most popular games from IGDB + V3
   static getGames () {
  //   return new Promise((resolve, reject) => {
  //     axios({
  //       url: API_URL_V3,
  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/json',
  //         'user-key': USER_KEY
  //       },
  //       data: "fields name,cover,summary,url;sort popularity desc;limit 30;"
  //     })
  //       .then(response => {
  //         resolve(response.data);
  //       })
  //       .catch(err => {
  //         reject(err);
  //       });
  //   });
  

  var myHeaders = new Headers();
  myHeaders.append("user-key", "59aeb1b217ba38dc388929d3f9aa29da");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("https://api-v3.igdb.com/games/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
}

