<template>
  <div>
    <div class="jumbotron text-center">
      <h1>Welcome to Bits and Bots!</h1>
    </div>
    <div class="row">
      <div class="col-md-5">
        <h3>Register</h3>
        <Register></Register>
      </div>
      <div class="col-md-5">
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
import Register from "@/components/RegisterComponent.vue";

export default {
  name: "LandingPage",
  components: {
    Login,
    Register
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
.col-md-5 {
  padding: 10px;
  margin: 10px;
}
</style>
