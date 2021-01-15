<template>
  <div id="app">
    <!-- <img
      src="../src/assets/placeholder/mobile-placeholder.png"
      class="bg-img"
    /> -->
    <div class="main-flex-wrapper">
      <site-header
        class="site-header"
        :menuIsOpened="menuIsOpened"
        @toggle-menu="toggleMenu"
      ></site-header>
      <div class="center-content">
        <mobile-menu :menuIsOpened="menuIsOpened"></mobile-menu>
        <view-display :displayIsOpened="displayIsOpened && !menuIsOpened">
        </view-display>
      </div>

      <site-footer></site-footer>
    </div>
  </div>
</template>

<script>
import SiteFooter from "./components/SiteFooter.vue";
import SiteHeader from "./components/SiteHeader.vue";
import MobileMenu from "./components/MobileMenu.vue";
import ViewDisplay from "./components/ViewDisplay.vue";

export default {
  name: "app",
  components: {
    SiteFooter,
    SiteHeader,
    MobileMenu,
    ViewDisplay
  },
  data() {
    return {
      menuIsOpened: false,
      displayIsOpened: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuIsOpened = !this.menuIsOpened;
    }
  },
  watch: {
    $route(to, from) {
      this.menuIsOpened = false;
      this.displayIsOpened = true;
    }
  },
  created() {
    this.displayIsOpened = this.$route.name !== "home";
  }
};
</script>

<style>
#app {
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  min-width: 100%;
  overflow: hidden;
  background-image: url("../src/assets/placeholder/mobile-placeholder.png");
  background-position: center;
  background-size: cover;
}
:root {
  --main-bg-color: 226, 196, 194;
  --main-bg-color-faded: rgba(var(--main-bg-color), 0.4);
  --triangle-angle: 10;
}
/* .bg-img {
  position: absolute;
  left: 0;
  top: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -3;
  height: 150%;
} */
.center-content {
  flex: 1 1 0;
  position: relative;
}
.main-flex-wrapper {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
}
</style>
