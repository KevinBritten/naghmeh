<template>
  <div id="app">
    <div class="main-flex-wrapper">
      <site-header
        class="site-header"
        :menuIsOpened="menuIsOpened"
        @toggle-menu="toggleMenu"
      ></site-header>
      <div class="center-content">
        <mobile-menu
          :menuIsOpened="menuIsOpened"
          @close-menu="closeMenu"
        ></mobile-menu>
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
import MobileMenu from "./components/MobileMenu/MobileMenu.vue";
import ViewDisplay from "./components/ViewDisplay/ViewDisplay.vue";

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
    },
    closeMenu() {
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
  background-image: url("../src/assets/images/homepage-background-mobile.jpg");
  background-size: cover;
  /* min-height: 100%; */
  /* max-height: 100%; */
  /* min-width: 100%; */
  /* overflow: hidden; */
  /* background-position: center; */
}
:root {
  --main-bg-color: 226, 196, 194;
  --main-bg-color-faded: rgba(var(--main-bg-color), 0.4);
  --triangle-angle: 10;
}
.center-content {
  flex: 1 1 0;
  position: relative;
}
.main-flex-wrapper {
  display: flex;
  height: 100%;
  flex-direction: column;
  /* width: 100%; */
}
</style>
