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
        <Login></Login>
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
  }
};
</script>

<style scoped>
.col-md-5 {
  padding: 10px;
  margin: 10px;
}
</style>
