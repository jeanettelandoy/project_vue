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
      <div class="[ error ]" v-if="showPasswordError">
        Please enter a correct password
      </div>
      <button type="button" v-on:click="login" class="[ btn btn-default ]">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: [
    "message",
    "showUsernameError",
    "showPaswordError",
    "inputUsernameError",
    "inputPasswordError"
  ],
  methods: {
    login: function() {
      const app = this;
      app.$emit("clicked", this.username, this.password);
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
