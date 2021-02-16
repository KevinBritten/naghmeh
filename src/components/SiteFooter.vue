<template>
  <div class="site-footer">
    <div class="site-footer__social-icons">
      <a
        href="https://music.apple.com/ca/artist/naghmeh-and-the-southern-shores/1464957868"
        ><img src="../assets/social-icons/Apple_Music_Icon_blk_sm_073120.svg"
      /></a>
      <a
        href="http://naghmehandthesouthernshores.bandcamp.com/album/naghmeh-and-the-southern-shores"
        ><img src="../assets/social-icons/bandcamp-logo.svg"
      /></a>
      <a href="http://www.facebook.com/naghmehasong"
        ><img src="../assets/social-icons/f_logo_RGB-Black_72.png"
      /></a>
      <a href="http://instagram.com/naghmehasong"
        ><img src="../assets/social-icons/sm-icons-instagram-glyph-logo.png"
      /></a>
      <a
        href="https://open.spotify.com/artist/0vBnUPIvZVYs1EIW5DyfCb?si=UXtdQ11eRxaeHPRQL0G4bQ"
        ><img src="../assets/social-icons/spotify.png"
      /></a>
      <a href="https://www.youtube.com/channel/UCjeHotf4y_BFuspVrXFy3OQ"
        ><img src="../assets/social-icons/yt_icon_mono_light.png"
      /></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.site-footer {
  width: 100%;
  padding: 10px 0;
  background-color: var(--main-bg-color-faded);
  &__social-icons {
    display: flex;
    justify-content: space-around;
    /* height: 100%; */
    /* width: 100%; */
    /* position: relative; */
    a {
      width: 10%;
      margin: auto 0;
      /* max-height: 100%; */
    }
    img {
      width: 100%;
    }
  }
}
</style>
