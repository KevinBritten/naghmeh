<template>
  <div id="app">
   <img src="../src/assets/placeholder/mobile-placeholder.png" class="bg-img">
    <site-header :menuIsOpened="menuIsOpened" @toggle-menu="toggleMenu"></site-header>
    <mobile-menu :menuIsOpened="menuIsOpened"></mobile-menu>
    <router-view></router-view>
    <site-footer></site-footer>
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
    toggleMenu() {
      this.menuIsOpened = !this.menuIsOpened;
    }
  },
  watch:{
    $route (to, from){
        this.menuIsOpened = false;
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
.bg-img {
  position:absolute;
  left:0;
  top:0;
  height: 100%;
  z-index:-3;
}
#app {
  height:100vh;
  min-height: 100vh;
  max-height: 100vh;
  min-width: 100vw;
  /* background-image: url("../src/assets/placeholder/mobile-placeholder.png"); */
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  overflow:hidden;

}
</style>
