<template>
  <div class="view-display-panel" :class="{ 'view-display-panel--bg': isBg }">
    <div
      class="view-display-panel__triangle view-display-panel__triangle--top"
      :class="{ 'view-display-panel__triangle--bg': isBg }"
    ></div>
    <div
      class="view-display-panel__content"
      :class="{ 'view-display-panel__content--main': !isBg }"
    >
      <div class="view-display-panel__inner-container" v-if="!isBg">
        <router-view></router-view>
      </div>
    </div>
    <div
      class="view-display-panel__triangle view-display-panel__triangle--bottom"
      :class="{ 'view-display-panel__triangle--bg': isBg }"
    ></div>
  </div>
</template>

<script>
export default { props: ["isBg"] };
</script>

<style scoped>
.view-display-panel {
  /* refactor with sass */
  width: 95%;
  position: absolute;
  left: 5%;
  z-index: 2;
  padding: 2% 0% 1% 0%;

  height: 100%;
  &--bg {
    z-index: 1;
    padding: 0% 0% 3% 0%;
    left: 0;
  }

  &__content {
    position: relative;
    background-color: rgb(var(--main-bg-color), 0.8);
    height: 80%;
    z-index: 10;
    &--main {
      background-color: rgb(var(--main-bg-color), 1);
      padding: 0px 15px 0px 15px;
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
    height: 10%;
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
