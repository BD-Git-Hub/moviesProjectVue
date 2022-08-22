<template>
  <div class="trailerSection">
    <h1>Trailers</h1>
    <vueper-slides
      class="no-shadow"
      :visible-slides="5"
      :arrows="false"
      :slide-ratio="1 / 6"
      :gap="3"
      :dragging-distance="70"
    >
      <vueper-slide
        v-for="slide in slides"
        :key="slide.id"
        :title="slide.content"
        class="vueper-slide"
      />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: {
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
      slides: [
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
