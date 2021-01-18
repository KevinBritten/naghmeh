<template>
  <div class="scroll-area">
    <h1>{{ title }}</h1>
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
h1 {
  margin-bottom: 5px;
  width: 100%;
  text-align: center;
  color: black;
}

.scroll-area {
  height: 100%;
  display: flex;
  flex-direction: column;
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
