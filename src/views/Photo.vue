<template>
  <div class="photo-page">
    <div
      class="photo-page__fullscreen-button"
      :class="{ 'photo-page__fullscreen-button--fullscreen': fullscreen }"
      @click="fullscreen = !fullscreen"
    >
      x
    </div>
    <scroll-area :title="'Photos'">
      <div
        class="photo-page__photo-container"
        :class="{ 'photo-page__photo-container--fullscreen': fullscreen }"
      >
        <img
          v-for="photo in photoList"
          :src="`${sourceFolder}${photo}`"
          :key="photo"
        />
      </div>
    </scroll-area>
  </div>
</template>

<script>
import PhotoList from "../components/data/PhotoList";
import ScrollArea from "../components/ScrollArea.vue";
export default {
  data() {
    return {
      sourceFolder: "dist/src/assets/images/photos/",
      photoList: PhotoList,
      fullscreen: false
    };
  },
  components: {
    ScrollArea
  }
};
</script>

<style scoped>
.photo-page {
  height: 100%;
  &__fullscreen-button {
    position: absolute;
    right: 10px;
    top: 20px;
    font-size: 40px;
    max-height: 20px;
    max-width: 20px;
    color: white;
    top: -40px;
    z-index: 200;
    &--fullscreen {
      position: fixed;
      bottom: 35px;
      right: 15px;
      top: auto;
    }
  }
  &__photo-container {
    margin: 15px 0;

    &--fullscreen {
      margin: 0;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      overflow: scroll;
      z-index: 100;
      background-color: rgb(var(--main-bg-color));
    }
  }
}
img {
  max-width: 100%;
}
</style>
