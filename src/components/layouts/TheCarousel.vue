<template>
  <div class="trailerSection">
    <h1>{{ title }}</h1>
    <vueper-slides
      class="no-shadow"
      :breakpoints="breakpoints"
      :visible-slides="5"
      :arrows="false"
      :slide-multiple="true"
      :slide-ratio="1 / 6"
      :gap="3"
      :dragging-distance="70"
      :bullets-outside="false"
      :touchable="true"
    >
      <vueper-slide
        v-for="slide in slides"
        :key="slide.id"
        :title="slide.content"
        class="vueper-slide"
        :image="slide.image"
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
  components: {
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
      breakpoints: {
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

      slides: [
        {
          id: Math.floor(Math.random() * 100),
          title: "Slide #1",
          content: "Slide 1 Content.",
          image: require("../../assets/img/womentest.png"),
        },
        {
          id: Math.floor(Math.random() * 100),
          title: "Slide #2",
          content: "Slide 2 Content.",
          image: require("../../assets/img/womentest.png"),
        },
        {
          id: Math.floor(Math.random() * 100),
          title: "Slide #3",
          content: "Slide 3 Content.",
          image: require("../../assets/img/womentest.png"),
        },
        {
          id: Math.floor(Math.random() * 100),
          title: "Slide #4",
          content: "Slide 4 Content.",
          image: require("../../assets/img/womentest.png"),
        },
        {
          id: Math.floor(Math.random() * 100),
          title: "Slide #5",
          content: "Slide 5 Content.",
          image: require("../../assets/img/womentest.png"),
        },
        {
          id: Math.floor(Math.random() * 100),
          title: "Slide #6",
          content: "Slide 6 Content.",
        },
        {
          id: Math.floor(Math.random() * 100),
          title: "Slide #7",
          content: "Slide 7 Content.",
        },
        {
          id: Math.floor(Math.random() * 100),
          title: "Slide #8",
          content: "Slide 8 Content.",
        },
        {
          id: Math.floor(Math.random() * 100),
          title: "Slide #9",
          content: "Slide 9 Content.",
        },
        {
          id: Math.floor(Math.random() * 100),
          title: "Slide #10",
          content: "Slide 10 Content.",
        },
        {
          id: Math.floor(Math.random() * 100),
          title: "Slide #1",
          content: "Slide 1 Content.",
        },
        {
          id: Math.floor(Math.random() * 100),
          title: "Slide #2",
          content: "Slide 2 Content.",
        },
        {
          id: Math.floor(Math.random() * 100),
          title: "Slide #3",
          content: "Slide 3 Content.",
        },
        {
          id: Math.floor(Math.random() * 100),
          title: "Slide #4",
          content: "Slide 4 Content.",
        },
        {
          id: Math.floor(Math.random() * 100),
          title: "Slide #5",
          content: "Slide 5 Content.",
        },
        {
          id: Math.floor(Math.random() * 100),
          title: "Slide #6",
          content: "Slide 6 Content.",
        },
        {
          id: Math.floor(Math.random() * 100),
          title: "Slide #7",
          content: "Slide 7 Content.",
        },
        {
          id: Math.floor(Math.random() * 100),
          title: "Slide #8",
          content: "Slide 8 Content.",
        },
        {
          id: Math.floor(Math.random() * 100),
          title: "Slide #9",
          content: "Slide 9 Content.",
        },
        {
          id: Math.floor(Math.random() * 100),
          title: "Slide #10",
          content: "Slide 10 Content.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.trailerSection {
  height: 25rem;
  background-color: pink;
}

.vueper-slides {
  background-color: purple;
}

.vueper-slide {
  background-color: bisque;
}
</style>
