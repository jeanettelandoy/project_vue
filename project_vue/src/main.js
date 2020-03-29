import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.component("NavBar"),
  {
    props: ["id"],
    template: `<div id="NavBar"> <div class="row row--navbar">
    <div class="col-md-1"><img src="../assets/logo_bb_w.png" /></div>
    <div class="col-md-3"><h1>Bits and Bots</h1></div>
    <div class="col-md-3" style="float:right">
      <h5 :id="id" @addtocart="UpdateCart" v-bind="$attrs">
        In cart: {{ $attrs.cart.length }}
      </h5>
    </div>
  </div>
  </div>
</div>`,
    data: function() {
      return {
        cart: []
      };
    },
    methods: {
      UpdateCart(id) {
        this.cart.push(id);
      },
      EmptyCart() {
        this.cart = [];
      }
    }
  };
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
