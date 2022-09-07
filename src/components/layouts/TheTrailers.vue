<template>
  <div class="trailerSection">
    <h1>{{ title }}</h1>
    <vueper-slides
      class="no-shadow vueper-slides__bullet"
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
        class="vueper-slide"
        :image="data.posterURL"
        @click="selectedFilmSubmitted(data.id, data.name, trailerSection)"
      >
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  props: ["title", "selectedTrailer"],
  inject: ["trailerData", "selectedFilmSubmitted"],
  components: {
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
      trailerSection: "trailerSection",
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
  color: white;
}
.trailerSection {
  height: 25rem;
  background-color: #121212;
}

.vueper-slide {
  margin-top: 0.3rem;
  margin-bottom: 0.5rem;
  color: white;
  font-size: 1.5rem;
  text-transform: uppercase;
  border-radius: 2rem;
  border-right: solid black 0.2rem;
  border-bottom: solid black 0.2rem;
  box-shadow: 0.1rem 0.1rem 1rem black;
  cursor: pointer;
  transition: 2.5s;
}

.vueper-slide:hover {
  border-right: solid pink 0.2rem;
  border-bottom: solid orange 0.2rem;
  box-shadow: 0.1rem 0.1rem 1rem orange;
  transition: 0.3s;
}

.vueper-slides__bullet {color: orange}



</style>
