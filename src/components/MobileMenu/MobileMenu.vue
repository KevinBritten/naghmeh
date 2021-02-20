<template>
  <div class="mobile-menu">
    <transition name="slide-main">
      <menu-panel :isBg="false" v-if="menuIsOpened">
        <div class="nav-link-container">
          <span
            v-for="navLink of navLinks"
            :key="navLink"
            @click="$emit('close-menu')"
          >
            <router-link :to="'/' + navLink">
              {{ navLink.toUpperCase() }}
            </router-link></span
          >
        </div>
      </menu-panel>
    </transition>
    <transition name="slide-bg">
      <menu-panel :isBg="true" v-if="menuIsOpened">
        <div class="menu-panel__menu--background"></div>
      </menu-panel>
    </transition>
  </div>
</template>

<script>
import MenuPanel from "./MenuPanel.vue";
export default {
  props: ["menuIsOpened"],
  data() {
    return {
      navLinks: ["about", "music", "merch", "video", "photo", "contact"]
    };
  },
  components: {
    MenuPanel
  }
};
</script>

<style scoped>
.mobile-menu {
  height: 100%;
  top: 0;
}
a {
  display: block;
  width: 100%;
  text-align: center;
  text-decoration: none;
}
.router-link-active {
  font-size: 60px;
}

.slide-main-enter {
  transform: translateX(107%);
}
.slide-bg-enter {
  transform: translateX(100%);
}
.slide-main-enter-active,
.slide-main-leave-active,
.slide-bg-enter-active,
.slide-bg-leave-active {
  transition: transform 0.5s ease-out;
}

.slide-main-enter-to,
.slide-bg-enter-to {
  transform: translateX(0%);
}

.slide-main-leave-to {
  transform: translateX(107%);
}
.slide-bg-leave-to {
  transform: translateX(100%);
}

.nav-link-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.menu-panel__background {
  width: 110%;
  z-index: -1;
}
</style>
