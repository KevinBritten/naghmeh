<template>
  <div class="merch-page">
    <scroll-area :title="'Merch'">
      <div class="item-container">
        <h1>CD</h1>
        <img src="../assets/images/20191212_103032.jpg" />
        <p>
          $10 on
          <a
            href="https://naghmehandthesouthernshores.bandcamp.com/album/naghmeh-and-the-southern-shores"
            target="_blank"
            >bandcamp</a
          >
        </p>
      </div>
      <div class="item-container">
        <h1>T-shirt</h1>
        <img src="../assets/images/20191212_110100.jpg" />
        <p>
          $15 on
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
a {
  color: black;
}
p {
  color: black;
}
h1 {
  color: black;
}
.merch-page {
  height: 100%;
  width: 100%;
}
.item-container {
  margin: 10px 0 30px;
  text-align: center;
}
img {
  height: 150px;
  width: 100%;
}
</style>
