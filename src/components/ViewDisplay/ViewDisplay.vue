<template>
  <div class="view-display">
    <slot></slot>
    <transition name="slide-main">
      <view-display-panel :isBg="false" v-if="displayIsOpened">
      </view-display-panel>
    </transition>
    <transition name="slide-bg">
      <view-display-panel :isBg="true" v-if="displayIsOpened">
        <div class="content-panel__content--background"></div>
      </view-display-panel>
    </transition>
  </div>
</template>

<script>
import ViewDisplayPanel from "./ViewDisplayPanel.vue";
export default {
  props: ["displayIsOpened"],
  components: {
    ViewDisplayPanel
  }
};
</script>

<style scoped>
.slide-main-enter {
  transform: translateX(-107%);
}
.slide-bg-enter {
  transform: translateX(-100%);
}
.slide-main-enter-active,
.slide-main-leave-active,
.slide-bg-enter-active,
.slide-bg-leave-active {
  transition: transform 0.5s ease-out;
}

.slide-main-enter-to,
.slide-bg-enter-to {
  transform: translateX(0%);
}

.slide-main-leave-to {
  transform: translateX(-107%);
}
.slide-bg-leave-to {
  transform: translateX(-100%);
}

.content-panel__background {
  width: 110%;
  z-index: -1;
}
.view-display {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
}
</style>
