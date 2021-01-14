<template>
  <div class="content-panel" :class="{ 'content-panel--bg': isBg }">
    <div
      class="content-panel__triangle content-panel__triangle--top"
      :class="{ 'content-panel__triangle--bg': isBg }"
    ></div>
    <div
      class="content-panel__content"
      :class="{ 'content-panel__content--main': !isBg }"
    >
      <div class="content-panel__inner-container" v-if="!isBg">
        <router-view></router-view>
      </div>
    </div>
    <div
      class="content-panel__triangle content-panel__triangle--bottom"
      :class="{ 'content-panel__triangle--bg': isBg }"
    ></div>
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
      background-color: rgb(var(--main-bg-color), 1);
      padding: 10px 15px 10px 15px;
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
    background-color: rgba(var(--main-bg-color), 1);
    &--bg {
      background-color: rgba(var(--main-bg-color), 0.8);
    }

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
