<template>
  <div class="music-page">
    <scroll-area :title="'Music'">
      <div class="music-page__spotify-embed">
        <loading-animation v-if="!spotifyIsLoaded"></loading-animation>
        <!-- <h1>Mount Shasta</h1> -->
        <iframe
          src="https://open.spotify.com/embed/artist/0vBnUPIvZVYs1EIW5DyfCb"
          allowfullscreen
          allow="encrypted-media"
          @load="spotifyIsLoaded = true"
        ></iframe>
        <iframe
          src="https://open.spotify.com/embed/track/72a5G5O8nntwovTGojP7Mo"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe></div
    ></scroll-area></div
></template>

<script>
import LoadingAnimation from "../components/LoadingAnimation.vue";
import ScrollArea from "../components/ScrollArea.vue";

export default {
  components: { LoadingAnimation, ScrollArea },
  data() {
    return {
      spotifyIsLoaded: false
    };
  }
};
</script>

<style scoped>
h1 {
  color: black;
  text-align: center;
}
.music-page {
  padding: 5% 0;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  &__spotify-embed {
    display: block;
    margin: 10% 0;
    position: relative;
    width: 100%;
    overflow: hidden;
  }
}

iframe {
  height: 360px;
  max-height: 90%;
  width: 100%;
  border: 0;
}
</style>
