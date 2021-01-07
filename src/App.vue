<template>
  <div id="app">
    <site-header @toggle-menu="toggleMenu"></site-header>
    <mobile-menu v-if="menuIsOpened"></mobile-menu>
    <site-footer></site-footer>
    <router-view></router-view>
  </div>
</template>

<script>
import SiteFooter from "./components/SiteFooter.vue";
import SiteHeader from "./components/SiteHeader.vue";
import MobileMenu from "./components/MobileMenu.vue";
export default {
  name: "app",
  components: {
    SiteFooter,
    SiteHeader,
    MobileMenu
  },
  data() {
    return {
      menuIsOpened: false
    };
  },
  methods: {
    toggleMenu(data) {
      this.menuIsOpened = data.menuIsOpened;
    }
  }
};
</script>

<style>
:root {
  --main-bg-color: 226, 196, 194;
  --main-bg-color-faded: rgba(var(--main-bg-color), 0.4);
  --triangle-angle: 0;
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
