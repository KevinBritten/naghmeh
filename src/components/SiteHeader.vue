<template>
  <div class="main wrapper">
    <div class="header__title-container">
      <h1 class="header__title-left">NAGHMEH</h1>
      <h1 class="header__title-right">SHAFIEI</h1>
    </div>
    <div
      class="bar"
      :class="{ clicked: menuIsOpened }"
      @click="toggleMenu"
    ></div>
  </div>
</template>

<script>
import MobileMenu from "./MobileMenu";
export default {
  props:['menuIsOpened'],
  // data() {
  //   return {
  //     menuIsOpened: false
  //   };
  // },
  methods: {
    toggleMenu() {
      // this.menuIsOpened = !this.menuIsOpened;
      // this.$emit("toggle-menu", { menuIsOpened: this.menuIsOpened });
            this.$emit("toggle-menu");

    }
  },
  components: {
    MobileMenu
  }
};
</script>

<style scoped>
.main {
  background-color: var(--main-bg-color-faded);
  height: 100px;
  min-width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.header {
  &__title-container {
    width: 70%;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }
  &__title-right {
    align-self: flex-end;
    letter-spacing: 10px;
  }
}
.bar {
  position: relative;
  width: 40px;
  height: 2px;
  background: #fff;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    left: 0;
    transform-origin: center center;
    transition: transform 0.25s ease, top 0.25s ease, bottom 0.25s ease;
  }

  &:before {
    top: -10px;
  }

  &:after {
    bottom: -10px;
  }
}
.clicked {
  background: transparent;

  &:before,
  &:after {
    background: white;
  }
  &:before {
    transform: rotate(45deg);
    top: 0;
  }
  &:after {
    transform: rotate(-45deg);
    bottom: 0;
  }
}
</style>
