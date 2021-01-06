<template>
  <div class="mobile-menu">
    <content-panel :isBg="false">
      <div class="nav-link-container">
        <a v-for="navLink of navLinks" :key="navLink" :href="'/' + navLink">{{
          navLink.toUpperCase()
        }}</a>
      </div>
    </content-panel>
    <content-panel :isBg="true">
      <div class="content-panel__content--background"></div>
    </content-panel>
  </div>
</template>

<script>
import ContentPanel from "./ContentPanel.vue";
export default {
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
  width: 110% !px;
  z-index: -1;
}
.content-panel__content--background {
  height: 100px;
}
</style>
