<template>
  <div>
    <div class="row row--navbar">
      <div class="col-md-1"><img src="../assets/logo_bb_w.png" /></div>
      <div class="col-md-4"><h1>Bits and Bots</h1></div>
      <div class="col-md-7" style="float:right display: inline">
        <h5 v-if="cart != null" :id="id" :cart="cart" @STORAGE_KEY="UpdateCart">
          In cart: {{ cart.length }}
        </h5>
        <router-link :to="'/Cart/'" :id="id">
          <button class="btn">Go to cart</button></router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
const STORAGE_KEY = "cart-storeage";

export default {
  name: "NavBar",
  props: ["id"],
  data: function() {
    return {
      cart: []
    };
  },
  methods: {
    UpdateCart(id) {
      this.cart.push(id);
      this.$emit(STORAGE_KEY, id);
      localStorage.setItem(STORAGE_KEY, this.cart);
    }
  },
  created() {
    this.cart = JSON.parse(localStorage.getItem(STORAGE_KEY));
  }
};
</script>

<style scoped>
.row--navbar {
  padding: 10px;
  background-color: #193031;
  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.13);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
}
h1 {
  font-family: Roboto mono;
  font-size: 28px;
  font-weight: 600;
  color: #f0ec74;
}
h5 {
  color: white;
}
</style>
