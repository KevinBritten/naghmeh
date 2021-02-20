<template>
  <div class="menu-panel" :class="{ 'menu-panel--bg': isBg }">
    <div
      class="menu-panel__triangle menu-panel__triangle--top"
      :class="{ 'menu-panel__triangle--bg': isBg }"
    ></div>
    <div
      class="menu-panel__content"
      :class="{ 'menu-panel__triangle--bg': isBg }"
    >
      <slot></slot>
    </div>
    <div
      class="menu-panel__triangle menu-panel__triangle--bottom"
      :class="{ 'menu-panel__triangle--bg': isBg }"
    ></div>
  </div>
</template>

<script>
export default { props: ["isBg"] };
</script>

<style scoped>
.menu-panel {
  /* refactor with sass */
  width: 50%;
  position: absolute;
  right: 5%;
  z-index: 2;
  height: 100%;
  top: 15px;
  &--bg {
    z-index: 1;
    top: 30px;
    right: 0%;
    /* background-color: green; */
  }

  &__content {
    position: relative;
    background-color: rgb(var(--main-bg-color), 1);
    height: 70%;
    z-index: 10;
    display: flex;
    justify-content: center;
    &--bg {
      background-color: rgba(var(--main-bg-color), 0.8);
    }
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
