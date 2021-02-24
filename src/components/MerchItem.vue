<template>
  <div class="merch-item__item-container">
    <p>{{ itemName }}</p>
    <img class="merch-item__product-image" :src="imageUrl" />
    <p class="merch-item__price">
      ${{ price }} on
      <a :href="productPageUrl" target="_blank"
        ><img
          class="merch-item__bandcamp-logo"
          src="../assets/social-icons/bandcamp-logotype-color-128.png"
      /></a>
    </p>
  </div>
</template>

<script>
export default {
  props: ["price", "productPageUrl", "imageUrl", "itemName"]
};
</script>

<style scoped>
.merch-item {
  &__item-container {
    margin: 10px 0 30px;
    text-align: center;
    a {
      font-family: Arial;
    }
  }

  &__product-image {
    height: 250px;
    width: 100%;
    object-fit: cover;
  }
  &__price {
    margin-top: 10px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__bandcamp-logo {
    height: 40px;
    border: 1px solid white;
    border-radius: 10px;

    display: block;
    background-color: white;
    margin-left: 10px;
  }
}
</style>
