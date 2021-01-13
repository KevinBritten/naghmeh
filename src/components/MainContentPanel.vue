<template>
  <div class="content-panel" :class="{ 'content-panel--bg': isBg }">
    <div class="content-panel__triangle content-panel__triangle--top"></div>
    <div
      class="content-panel__content"
      :class="{ 'content-panel__content--main': !isBg }"
    >
      <div class="content-panel__inner-container" v-if="!isBg">
        <div class="scroll-overlay"></div>
        <router-view></router-view>
        <div class="scroll-overlay scroll-overlay--bottom"></div>
      </div>
    </div>
    <div class="content-panel__triangle content-panel__triangle--bottom"></div>
  </div>
</template>

<script>
export default { props: ["isBg"] };
</script>

<style scoped>
.content-panel {
  /* refactor with sass */
  width: 90%;
  position: absolute;
  left: 10%;
  z-index: 2;
  padding-top: 6%;
  height: 100%;
  &--bg {
    z-index: 1;
    padding-top: 2%;
    left: 0;
  }

  &__content {
    position: relative;
    background-color: rgb(var(--main-bg-color), 0.8);
    height: 80%;
    z-index: 10;
    &--main {
      padding: 0px 17% 0 10px;
      box-sizing: content-box;
    }
  }
  &__inner-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  &__triangle {
    position: relative;
    width: 100%;
    height: 40px;
    background-color: rgba(var(--main-bg-color), 0.8);

    &--top {
      clip-path: polygon(
        100% calc(var(--triangle-angle) * 1%),
        0 100%,
        100% 100%
      );
    }

    &--bottom {
      clip-path: polygon(
        100% 0%,
        0 calc((100 - var(--triangle-angle)) * 1%),
        0% 0%
      );
    }
  }
  .scroll-overlay {
    background: linear-gradient(
      0deg,
      rgba(var(--main-bg-color), 0) 0%,
      rgba(var(--main-bg-color), 1) 100%
    );
    /* background-color: black; */
    height: 10%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    &--bottom {
      background: linear-gradient(
        0deg,
        rgba(var(--main-bg-color), 1) 0%,
        rgba(var(--main-bg-color), 0) 100%
      );
      top: auto;
      bottom: 0;
      height: 20%;
    }
  }
}
</style>
