<template>
  <div class="container">
    <h3>{{ message }}</h3>

    <form>
      <input
        type="text"
        placeholder="username"
        v-model="username"
        v-bind:class="{ 'error-border': inputUsernameError }"
        class="[ form-control ]"
      />
      <div class="[ error ]" v-if="showUsernameError">
        Please enter a correct username
      </div>
      <input
        type="password"
        placeholder="password"
        v-model="password"
        v-bind:class="{ 'error-border': inputPasswordError }"
        class="[ form-control ]"
      />
      <button type="button" v-on:click="register" class="[ btn btn-default ]">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
let username = "";
export default {
  name: "Register",
  props: [
    "message",
    "showUsernameError",
    "showPaswordError",
    "inputUsernameError",
    "inputPasswordError"
  ],
  methods: {
    register: function() {
      const app = this;
      localStorage.setItem(username, JSON.stringify(this.username));
      app.$emit("clicked", this.username);
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
.error-border {
  border: solid 1px red;
}
input {
  padding: 10px;
  margin: 5px;
}
form {
  max-width: 50%;
}
</style>
