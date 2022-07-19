import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import constPlugin from "./plugins/constPlugin";

Vue.use(constPlugin);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
