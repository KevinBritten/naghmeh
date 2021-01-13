<template>
  <div id="app">
    <img
      src="../src/assets/placeholder/mobile-placeholder.png"
      class="bg-img"
    />
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
  }
};
</script>

<style>
#app {
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  min-width: 100vw;
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}
:root {
  --main-bg-color: 226, 196, 194;
  --main-bg-color-faded: rgba(var(--main-bg-color), 0.4);
  --triangle-angle: 0;
}
.bg-img {
  position: absolute;
  left: 0;
  top: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -3;
}
.center-content {
  flex: 1 1 0;
}
.main-flex-wrapper {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
}
</style>
