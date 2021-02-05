<template>
  <div class="mobile-menu">
    <transition name="slide-main">
      <content-panel :isBg="false" v-if="menuIsOpened">
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
      </content-panel>
    </transition>
    <transition name="slide-bg">
      <content-panel :isBg="true" v-if="menuIsOpened">
        <div class="content-panel__content--background"></div>
      </content-panel>
    </transition>
  </div>
</template>

<script>
import ContentPanel from "./ContentPanel.vue";
export default {
  props: ["menuIsOpened"],
  data() {
    return {
      navLinks: ["about", "music", "merch", "video", "photo", "contact"]
    };
  },
  components: {
    ContentPanel
  }
};
</script>

<style scoped>
.mobile-menu {
  height: 100%;
  /* position: absolute; */
  top: 0;
}
.router-link-active {
  color: green;
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
.content-panel__background {
  width: 110%;
  z-index: -1;
}
</style>
