<template>
  <div class="trailerSection">
    <h1>Trailers</h1>
    <!-- <vueperSlides>
      <vueperslide
        v-for="(slide, i) in slides"
        :key="i"
        :title="slide.title"
        :content="slide.content"
      >
      </vueperslide>
    </vueperSlides> -->
  </div>
</template>

<script>
// import { vueperSlides, vueperslide } from "vueperslides";

export default {
  components: {
    // vueperSlides,
    // vueperslide,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.trailerSection {
  height: 25rem;
  background-color: red;
}
</style>
