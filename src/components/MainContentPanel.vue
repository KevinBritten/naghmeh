<template>
  <div class="content-panel" :class="{ 'content-panel--bg': isBg }">
    <div class="content-panel__triangle content-panel__triangle--top"></div>
    <div
      class="content-panel__content"
      :class="{ 'content-panel__content--bg': isBg }"
    >
      <router-view v-if="!isBg"></router-view>
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
  padding-top: 10%;
  &--bg {
    z-index: 1;
    padding-top: 0px;
    left: 0;
  }

  &__content {
    position: relative;
    background-color: rgb(var(--main-bg-color), 0.8);
    height: 380px;
    z-index: 10;
  }

  &__triangle {
    position: relative;
    width: 100%;
    min-height: 20px;
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
}
</style>
