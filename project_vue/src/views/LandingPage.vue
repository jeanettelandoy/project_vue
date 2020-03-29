<template>
  <div>
    <div class="jumbotron text-center">
      <h1>Welcome to <br />Bits and Bots!</h1>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h3>Log in</h3>
        <Login
          v-bind:showUsernameError="showUsernameError"
          v-bind:showPasswordError="showUsernameError"
          v-bind:inputUsernameError="inputUsernameError"
          v-bind:inputPasswordError="inputUsernameError"
          @clicked="onClickChild"
        ></Login>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "@/components/LoginComponent.vue";

export default {
  name: "LandingPage",
  components: {
    Login
  },
  data() {
    return {
      message: "Please enter a username and password",
      showUsernameError: false,
      showPasswordError: false,
      inputUsernameError: false,
      inputPasswordError: false
    };
  },
  methods: {
    onClickChild(username, password) {
      if (
        username !== localStorage.getItem("username") ||
        password !== localStorage.getItem("password")
      ) {
        if (username !== localStorage.getItem("username")) {
          this.message = "please enter correct login details";
          this.showUsernameError = true;
          this.inputUsernameError = true;
        } else {
          this.showUsernameError = false;
          this.inputUsernameError = false;
        }
        if (password !== localStorage.getItem("password")) {
          this.message = "Please enter correct login details";
          this.showPasswordError = true;
          this.inputPasswordError = true;
        } else {
          this.showPasswordError = false;
          this.inputPasswordError = false;
        }
      } else {
        const sessionID = "123";
        sessionStorage.setItem("sessionID", sessionID);
        this.$router.push({ name: "GameList" });
      }
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: "Courier New", Courier, monospace;
  font-weight: 700;
  color: #f0ec74;
}
.col-md-5 {
  padding: 10px;
  margin: 10px;
}
.button {
  background-color: #193031;
  color: white;
}

.jumbotron {
  background-image: url("../assets/bilde.png");
  color: white;
  height: 500px;
}
footer {
  background-color: #193031;
  padding: 30px;
  color: white;
  margin-top: 20px;
}
</style>
