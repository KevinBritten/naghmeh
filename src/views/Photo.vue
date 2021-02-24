<template>
  <div class="photo-page">
    <div
      class="photo-page__fullscreen-icon-container"
      :class="{
        'photo-page__fullscreen-icon-container--fullscreen': fullscreen
      }"
      @click="fullscreen = !fullscreen"
    >
      <svg
        class="photo-page__fullscreen-icon"
        id="i-fullscreen"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="none"
        stroke="currentcolor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      >
        <path
          d="M4 12 L4 4 12 4 M20 4 L28 4 28 12 M4 20 L4 28 12 28 M28 20 L28 28 20 28"
        />
      </svg>
    </div>
    <scroll-area :title="'Photos'">
      <div
        class="photo-page__photo-container"
        :class="{ 'photo-page__photo-container--fullscreen': fullscreen }"
      >
        <img
          class="photo-page__image"
          :class="{
            'photo-page__image--fullscreen': fullscreen
          }"
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
  &__fullscreen-icon-container {
    position: absolute;
    right: 2px;
    top: 56px;
    font-size: 40px;
    width: 40px;
    color: white;
    z-index: 200;
    transition: transform 300ms;
    transform: scale(1);

    /* &:hover {
      transform: scale(1.5);
    } */
    &--fullscreen {
      position: fixed;
      top: 15px;
      right: 15px;
      transform: scale(1.5);
    }
  }
  &__fullscreen-icon {
    width: 100%;
    height: 100%;
  }
  &__photo-container {
    margin: 15px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
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
  &__image {
    max-width: 100%;
    margin-bottom: 10px;
    object-fit: cover;
    &--fullscreen {
      width: 100%;
    }
  }
}
@media (min-width: 500px) {
  .photo-page {
    &__image {
      width: 49%;
      min-height: 100%;
      &--fullscreen {
        width: 100%;
        min-height: 0;
      }
    }
  }
}
</style>
