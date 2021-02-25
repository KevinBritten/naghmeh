import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueLazyload from "vue-lazyload";
import { routes } from "./routes";
import "normalize.css";
import "../src/styles/base.css";
require.context("./assets/images/", true, /.*/);

Vue.use(VueRouter).use(VueLazyload);

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
