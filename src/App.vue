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
.app {
  min-height: 100vh;
  min-width: 100vw;
}
h1 {
  font-size: 10px;
}
</style>
