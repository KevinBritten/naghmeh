<template>
  <div class="mobile-menu">
    <transition name="slide">
      <content-panel :isBg="false" v-if="menuIsOpened">
        <div class="nav-link-container">
          <router-link
            v-for="navLink of navLinks"
            :key="navLink"
            :to="'/' + navLink"
          >
            {{ navLink.toUpperCase() }}
          </router-link>
        </div>
      </content-panel>
    </transition>
    <transition name="slide">
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
.slide-enter {
  transform: translateX(100%);
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-out;
}
.slide-enter-to {
  transform: translateX(0%);
}

.slide-leave-to {
  transform: translateX(100%);
}
a {
  font-size: 30px;
  display: block;
  color: black;
  width: 100%;
  text-align: center;
  text-decoration: none;
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
/* .content-panel__content--background {
  height: 100px;
} */
</style>
