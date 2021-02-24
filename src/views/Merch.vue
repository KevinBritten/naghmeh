<template>
  <div class="merch-page">
    <scroll-area :title="'Merch'">
      <!-- <div class="merch-page__item-container">
        <p>Mount Shasta - CD and Download</p>
        <img
          class="merch-page__product-image"
          src="../assets/images/merch/cd--mobile.jpg"
        />
        <p class="merch-page__price">
          $15 on
          <a
            href="https://naghmehandthesouthernshores.bandcamp.com/album/naghmeh-and-the-southern-shores"
            target="_blank"
            ><img
              class="merch-page__bandcamp-logo"
              src="../assets/social-icons/bandcamp-logotype-color-128.png"
          /></a>
        </p>
      </div>
      <div class="merch-page__item-container">
        <p>T-shirt</p>
        <img
          src="../assets/images/merch/t-shirt--mobile.jpg"
          class="merch-page__product-image"
        />
        <p class="merch-page__price">
          $20 on
          <a
            href="https://naghmehandthesouthernshores.bandcamp.com/merch/tank-top"
            target="_blank"
            ><img
              class="merch-page__bandcamp-logo"
              src="../assets/social-icons/bandcamp-logotype-color-128.png"
          /></a>
        </p>
      </div>

      <div class="merch-page__item-container">
        <p>Tanktop</p>
        <img
          src="../assets/images/merch/tanktop--mobile.jpg"
          class="merch-page__product-image"
        />
        <p class="merch-page__price">
          $20 on
          <a
            href="https://naghmehandthesouthernshores.bandcamp.com/merch/tank-top"
            target="_blank"
            ><img
              class="merch-page__bandcamp-logo"
              src="../assets/social-icons/bandcamp-logotype-color-128.png"
          /></a>
        </p>
      </div> -->
      <merch-item
        item-name="Mount Shasta - CD and Download"
        price="15"
        image-url="dist/src/assets/images/merch/cd--mobile.jpg"
        product-page-url="https://naghmehandthesouthernshores.bandcamp.com/album/naghmeh-and-the-southern-shores"
      ></merch-item>
      <merch-item
        image-url="dist/src/assets/images/merch/tanktop--mobile.jpg"
        price="20"
        item-name="Tanktop"
        product-page-url="https://naghmehandthesouthernshores.bandcamp.com/merch/tank-top"
      ></merch-item>
      <merch-item
        image-url="dist/src/assets/images/merch/t-shirt--mobile.jpg"
        price="20"
        item-name="T-shirt"
        product-page-url="https://naghmehandthesouthernshores.bandcamp.com/merch/t-shirt"
      ></merch-item>
    </scroll-area>
  </div>
</template>

<script>
import ScrollArea from "../components/ScrollArea.vue";
import MerchItem from "../components/MerchItem.vue";

export default {
  components: { ScrollArea, MerchItem }
};
</script>

<style scoped>
.merch-page {
  height: 100%;
  width: 100%;
}
</style>
