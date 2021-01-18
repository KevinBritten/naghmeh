<template>
  <div class="about-page">
    <h1>ABOUT</h1>
    <div class="about-page__content-wrapper">
      <scroll-overlay></scroll-overlay>
      <div class="about-page__content">
        <p>
          Naghmeh Shafiei is an Iranian-Canadian singer/songwriter and the front
          woman of the Montreal based post-modern rock band Naghmeh and the
          Southern Shores. She began performing as a solo artist in 2016 while
          living in San Francisco, deciding to abandon the corporate grind to
          pursue her dream of becoming a touring musician. Naghmeh jumped head
          first into the world of rock n’ roll and set off on the road over the
          following year with performances across Europe and South America. Her
          DIY musical empire was steadily growing as her music spread across the
          globe.
        </p>
        <p>
          After years on the road and a few international collaborations,
          Naghmeh moved back to her hometown of Montreal to focus on the next
          step of her career. She assembled a band, performed in every corner of
          the city, and recorded, co-produced and released her self-titled debut
          album in 2019. Her sound is authentic in its delivery and blends
          different eras of music into a punky, alternative, pop rock. With
          throaty melodies, satirical lyrics and a touch of triumphant rock n'
          roll, Naghmeh's goal is to transform the listener’s internal turmoil
          into a healing, whimsical dance.
        </p>
        <p class="last-paragraph">
          She holds a Master of Arts in Psychology and has worked as a front
          woman, song writer, event producer, performer, and session musician.
          She’s a fierce entrepreneur and has worked hard her entire life to
          rise above the prejudices she’s faced. Her story is inspiring and has
          just begun. Naghmeh is on a mission to bring love and justice to the
          world and is doing so through the art of music. She’s dedicating her
          efforts to produce her next musical offering which is set to release
          in 2021. Stay tuned for Queen Of Hearts!
        </p>
      </div>
      <scroll-overlay :is-bottom="true"></scroll-overlay>
    </div>
  </div>
</template>
<script>
import ScrollOverlay from "../components/ScrollOverlay.vue";
export default {
  components: { ScrollOverlay }
};
</script>
<style scoped>
* {
  color: black;
}
h1 {
  margin-bottom: 5px;
  width: 100%;
  text-align: center;
}
p {
  padding: 10px 0 10px 0;
}
.last-paragraph {
  padding: 10px 0 150px 0;
}
.about-page {
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
  }
}
</style>
