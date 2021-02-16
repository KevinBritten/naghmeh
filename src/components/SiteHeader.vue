<template>
  <!-- <div class="site-header wrapper"> -->
  <div class="site-header">
    <div class="site-header__title-container">
      <h1 class="site-header__title-left">NAGHMEH</h1>
      <h1 class="site-header__title-right">SHAFIEI</h1>
    </div>
    <div
      class="site-header__hamburger-menu"
      :class="{ 'site-header__hamburger-menu--clicked': menuIsOpened }"
      @click="toggleMenu"
    ></div>
  </div>
</template>

<script>
export default {
  props: ["menuIsOpened"],
  methods: {
    toggleMenu() {
      this.$emit("toggle-menu");
    }
  }
};
</script>

<style scoped>
.site-header {
  background-color: var(--main-bg-color-faded);
  height: 80px;
  /* min-width: 100vw; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  &__title-container {
    width: 70%;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    color: rgb(216, 192, 188);
  }
  &__title-right {
    align-self: flex-end;
    letter-spacing: 10px;
  }
  &__hamburger-menu {
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
    &--clicked {
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
  }
}
</style>
