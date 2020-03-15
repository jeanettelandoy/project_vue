<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  created() {
    let config = { "user-key": "59aeb1b217ba38dc388929d3f9aa29da" };

    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games/",
        { headers: config }
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("there was an error " + error.response);
      });
  }
};
</script>
