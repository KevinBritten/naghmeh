<template>
  <div
    class="scroll-overlay"
    :class="{ 'scroll-overlay--bottom': isBottom }"
  ></div>
</template>

<script>
export default {
  props: ["isBottom"]
};
</script>

<style scoped>
.scroll-overlay {
  background: linear-gradient(
    0deg,
    rgba(var(--main-bg-color), 0) 0%,
    rgba(var(--main-bg-color), 1) 100%
  );
  /* background-color: black; */
  height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
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
</style>
