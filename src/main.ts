import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vueToastPanel from "./plugin/test.js";

Vue.config.productionTip = false;
Vue.use(vueToastPanel);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
