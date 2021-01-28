<template>
  <div class="music-page">
    <scroll-area :title="'Videos'">
      <div class="music-page__youtube-embed-container">
        <iframe
          width="560"
          height="215"
          src="https://www.youtube.com/embed/LVcSP-5DrS4"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="215"
          src="https://www.youtube.com/embed/ZMTMzOAkKp4"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="215"
          src="https://www.youtube.com/embed/MKhKrHu19lk"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </scroll-area>
  </div>
</template>

<script>
import ScrollArea from "../components/ScrollArea.vue";
export default {
  components: { ScrollArea }
};
</script>

<style>
.music-page {
  height: 100%;
  &__youtube-embed-container {
    margin-top: 5%;
    max-width: 100%;
    margin-bottom: 5%;
  }
}

iframe {
  max-width: 100%;
}
</style>
