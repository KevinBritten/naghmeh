<template>
  <div class="scroll-area">
    <h1 class="scroll-area__title">• {{ title }} •</h1>
    <div class="scroll-area__content-wrapper">
      <scroll-overlay></scroll-overlay>
      <div class="scroll-area__content">
        <slot></slot>
      </div>
      <scroll-overlay :is-bottom="true"></scroll-overlay>
    </div>
  </div>
</template>

<script>
import ScrollOverlay from "../components/ScrollOverlay";
export default {
  props: ["title"],
  components: { ScrollOverlay }
};
</script>

<style scoped>
.scroll-area {
  height: 100%;
  display: flex;
  flex-direction: column;
  &__title {
    margin-bottom: 5px;
    width: 100%;
    text-align: center;
  }
  &__content-wrapper {
    position: relative;
    flex: 1;
  }
  &__content {
    overflow: scroll;
    position: absolute;
    top: 1px;
    left: 0;
    right: 0;
    bottom: 1px;
    &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}
</style>
