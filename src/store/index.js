
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    addToCart(state, payload) {
      state.cart.unshift(payload);
    },
  },
  getters: {
    getCart: (state) => state.cart,
    getTotalCartPrice: (state) =>
      state.cart.reduce((sum, item) => {
        sum += item.price * item.amount;
        return sum;
      }, 0),
  },
  modules: {},
});
