<template>
  <div class="video-page">
    <scroll-area :title="'Videos'">
      <div class="video-page__youtube-embed-container">
        <div class="video-page__single-embed-container">
          <loading-animation v-if="!youtubeIsLoaded[1]"></loading-animation>
          <iframe
            width="560"
            height="215"
            src="https://www.youtube.com/embed/LVcSP-5DrS4"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            @load="youtubeIsLoaded[1] = true"
          ></iframe>
        </div>
        <div class="video-page__single-embed-container">
          <loading-animation v-if="!youtubeIsLoaded[2]"></loading-animation>
          <iframe
            width="560"
            height="215"
            src="https://www.youtube.com/embed/ZMTMzOAkKp4"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            @load="youtubeIsLoaded[1] = true"
          ></iframe>
        </div>
        <div class="video-page__single-embed-container">
          <loading-animation v-if="!youtubeIsLoaded[3]"></loading-animation>
          <iframe
            width="560"
            height="215"
            src="https://www.youtube.com/embed/MKhKrHu19lk"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            @load="youtubeIsLoaded[1] = true"
          ></iframe>
        </div>
      </div>
    </scroll-area>
  </div>
</template>

<script>
import ScrollArea from "../components/ScrollArea.vue";
import LoadingAnimation from "../components/LoadingAnimation";
export default {
  components: { ScrollArea, LoadingAnimation },
  data() {
    return { youtubeIsLoaded: { 1: false, 2: false, 3: false } };
  }
};
</script>

<style scoped>
.video-page {
  height: 100%;
  &__youtube-embed-container {
    margin-top: 5%;
    max-width: 100%;
    margin-bottom: 30%;
  }
  &__single-embed-container {
    min-height: 100px;
    position: relative;
  }
}

iframe {
  max-width: 100%;
}
</style>
