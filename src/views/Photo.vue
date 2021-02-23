<template>
  <div class="photo-page">
    <scroll-area :title="'Photos'">
      <div>
        <img v-for="photo in photos" :src="photo" :key="photo" />
      </div>
    </scroll-area>
  </div>
</template>

<script>
import PhotoList from "../components/data/PhotoList";
import ScrollArea from "../components/ScrollArea.vue";
export default {
  data() {
    return {
      sourceFolder: "../assets/images/photos/",
      photoList: PhotoList
    };
  },
  components: {
    ScrollArea
  }
  // computed: {
  //   photos() {
  //     return this.photoList.map(photo => {
  //       const fileName = `${this.sourceFolder}${photo}`;
  //       // return require(`${fileName}`);
  //       // return fileName;
  //       // return photo;
  //     });
  //     // return
  //   }
  // },
  // created() {
  //   this.photoList.forEach(photo => {
  //     const fileName = `${this.sourceFolder}${photo}`;
  //     require(fileName);
  //   });
  // }
};
</script>

<style scoped>
img {
  min-width: 100%;
  min-height: 50px;
}
</style>
