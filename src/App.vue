<template>
  <div id="app">
    <site-header></site-header>
    <router-view></router-view>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteFooter from "./components/SiteFooter.vue";
import SiteHeader from "./components/SiteHeader.vue";
export default {
  name: "app",
  components: {
    SiteFooter,
    SiteHeader
  }
};
</script>

<style>
:root {
  --main-bg-color: 226, 196, 194;
}
#app {
  min-height: 100vh;
  max-height: 100vh;
  min-width: 100vw;
  background-image: url("../src/assets/placeholder/mobile-placeholder.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
