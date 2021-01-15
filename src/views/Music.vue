<template>
  <div class="music-page">
    <div class="music-page__spotify-embed">
      <!-- <iframe
        src="https://open.spotify.com/embed/artist/0vBnUPIvZVYs1EIW5DyfCb"
        width=""
        height="100%"
        frameborder="0"
        allowtransparency="true"
        allowfullscreen 
        allow="encrypted-media"
      ></iframe> -->
      <iframe
        src="https://open.spotify.com/embed/artist/0vBnUPIvZVYs1EIW5DyfCb"
        allowfullscreen
        allow="encrypted-media"
      ></iframe>
    </div></div
></template>

<script>
export default {};
</script>

<style scoped>
h1 {
  color: black;
}
.music-page {
  height: 100%;
  width: 100;
  &__spotify-embed {
    margin: auto;
    position: relative;
    height: 100%;
    width: 100;
  }
}

iframe {
  height: 360px;
  width: 100%;
  border: 0;
  margin: auto;
  display: bloack;
}
</style>
