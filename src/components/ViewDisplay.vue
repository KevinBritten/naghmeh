<template>
  <div class="view-display">
    <slot></slot>
    <transition name="slide">
      <main-content-panel :isBg="false" v-if="displayIsOpened">
        <slot></slot>
      </main-content-panel>
    </transition>
    <transition name="slide">
      <main-content-panel :isBg="true" v-if="displayIsOpened">
        <div class="content-panel__content--background"></div>
      </main-content-panel>
    </transition>
  </div>
</template>

<script>
import MainContentPanel from "./MainContentPanel.vue";
export default {
  props: ["displayIsOpened"],
  components: {
    MainContentPanel
  }
};
</script>

<style scoped>
.slide-enter {
  transform: translateX(-100%);
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-out;
}
.slide-enter-to {
  transform: translateX(0%);
}

.slide-leave-to {
  transform: translateX(-100%);
}

.content-panel__background {
  width: 110%;
  z-index: -1;
}
/* .content-panel__content--background {
  height: 100px;
} */
</style>
