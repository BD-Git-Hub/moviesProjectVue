<template>
  <div class="trailerSection">
    <h1>{{ title }}</h1>
    <vueper-slides
      class="no-shadow"
      :breakpoints="breakpoints"
      :visible-slides="5"
      :slide-multiple="true"
      :slide-ratio="1 / 6"
      :gap="3"
      :dragging-distance="70"
      :bullets-outside="false"
      :touchable="false"
      :arrows="true"
      :arrows-outside="false"
    >
      <vueper-slide
        v-for="data in trailerData"
        :key="data.id"
        :title="data.name"
        class="vueper-slide "
        :image="data.posterURL"
      >
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  props: ["title"],
  inject: ["trailerData"],
  components: {
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
      breakpoints: {
        4000: {
          slideRatio: 0.8 / 10,
          visibleSlides: 5,
          bulletsOutside: true,
        },
        3500: {
          slideRatio: 0.9 / 10,
          visibleSlides: 5,
          bulletsOutside: true,
        },
        3000: {
          slideRatio: 1 / 10,
          visibleSlides: 5,
          bulletsOutside: true,
        },
        2650: {
          slideRatio: 1.2 / 10,
          visibleSlides: 5,
          bulletsOutside: true,
        },

        2200: {
          slideRatio: 1.5 / 10,
          visibleSlides: 5,
          bulletsOutside: true,
        },

        2000: {
          slideRatio: 1.5 / 10,
          visibleSlides: 5,
          bulletsOutside: true,
        },

        1800: {
          slideRatio: 2 / 10,
          visibleSlides: 5,
          bulletsOutside: false,
        },

        1600: {
          slideRatio: 2 / 10,
          visibleSlides: 5,
          bulletsOutside: true,
        },

        1200: {
          slideRatio: 3 / 10,
          visibleSlides: 4,
          bulletsOutside: false,
        },

        1100: {
          slideRatio: 3 / 10,
          visibleSlides: 4,
          bulletsOutside: true,
        },

        1000: {
          slideRatio: 3 / 10,
          visibleSlides: 3,
          bulletsOutside: true,
        },

        800: {
          slideRatio: 4 / 10,
          visibleSlides: 3,
          bulletsOutside: true,
        },
        650: {
          slideRatio: 5 / 10,
          bulletsOutside: true,
          visibleSlides: 2,
        },
      },

      slides: [],
    };
  },
};
</script>

<style scoped>
h1 {
  padding: 1rem;
}
.trailerSection {
  height: 25rem;
  background-color: pink;
}

.vueper-slides {
  background-color: purple;
}

.vueper-slide {
  color: white;
  font-size: 1.5rem;
  text-transform: uppercase;
}


</style>
