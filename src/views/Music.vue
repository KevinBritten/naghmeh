<template>
  <div class="music-page">
    <h1>Music</h1>
    <div class="music-page__spotify-embed">
      <loading-animation v-if="!spotifyIsLoaded"></loading-animation>
      <iframe
        src="https://open.spotify.com/embed/artist/0vBnUPIvZVYs1EIW5DyfCb"
        allowfullscreen
        allow="encrypted-media"
        @load="spotifyIsLoaded = true"
      ></iframe>
    </div></div
></template>

<script>
import LoadingAnimation from "../components/LoadingAnimation.vue";

export default {
  components: { LoadingAnimation },
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
    margin: 5% 0;
    position: relative;
    width: 100%;
    height: 90%;
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
