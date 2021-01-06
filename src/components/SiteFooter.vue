<template>
  <div class="main wrapper">
    <p>Subscribe to the mailing list</p>
    <div class="footer__email-form-container">
      <input type="email" class="footer__email-input" />
      <div class="footer__join-btn"><h3>JOIN</h3></div>
    </div>
    <div class="footer__social-icons">
      <a
        ><img src="../assets/social-icons/Apple_Music_Icon_blk_sm_073120.svg"
      /></a>
      <a><img src="../assets/social-icons/bandcamp-logo.svg"/></a>
      <a><img src="../assets/social-icons/f_logo_RGB-Black_72.png"/></a>
      <a
        ><img src="../assets/social-icons/sm-icons-instagram-glyph-logo.png"
      /></a>
      <a><img src="../assets/social-icons/spotify.png"/></a>
      <a><img src="../assets/social-icons/yt_icon_mono_light.png"/></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  background-color: var(--main-bg-color-faded);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 130px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}

.footer {
  &__email-form-container {
    width: 100%;
    height: 30;
  }
  &__join-btn {
    display: inline-block;
    padding: 6px 5px 3px;
    border-radius: 25px;
    border: 1px solid white;
    background-color: rgb(var(--main-bg-color));
    height: 100%;

    h3 {
      color: black;
    }
  }
  &__email-input {
    display: inline-block;
    width: 80%;
    border-radius: 25px;
    border: 1px solid white;
    height: 100%;
  }
  &__social-icons {
    display: flex;
    justify-content: space-around;

    img {
      height: 40px;
    }
  }
}
</style>
