<template>
  <div class="merch-page">
    <scroll-area :title="'Merch'">
      <div class="merch-page__item-container">
        <h2>CD</h2>
        <img src="../assets/images/merch/cd--mobile.jpg" />
        <p>
          $15 on
          <a
            href="https://naghmehandthesouthernshores.bandcamp.com/album/naghmeh-and-the-southern-shores"
            target="_blank"
            >bandcamp</a
          >
        </p>
      </div>
      <div class="merch-page__item-container">
        <div class="merch-page__item-inner-container">
          <h2>T-shirt</h2>
          <img src="../assets/images/merch/t-shirt--mobile.jpg" />
        </div>
        <div class="merch-page__item-inner-container">
          <h2>Tanktop</h2>
          <img src="../assets/images/merch/tanktop--mobile.jpg" />
        </div>
        <p>
          $20 on
          <a
            href="https://naghmehandthesouthernshores.bandcamp.com/merch/tank-top"
            target="_blank"
            >bandcamp</a
          >
        </p>
      </div>
    </scroll-area>
  </div>
</template>

<script>
import ScrollArea from "../components/ScrollArea.vue";

export default {
  components: { ScrollArea }
};
</script>

<style scoped>
.merch-page {
  height: 100%;
  width: 100%;

  &__item-container {
    margin: 10px 0 30px;
    text-align: center;
    a {
      font-family: Arial;
    }
  }
  &__item-inner-container {
    display: inline-block;
    width: 49%;
    padding: 2px;
  }
}
img {
  height: 250px;
  width: 100%;
  object-fit: cover;
}
</style>
