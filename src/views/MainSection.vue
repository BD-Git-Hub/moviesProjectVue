<template>
  <div>
    <div class="mainSection">
      <div class="moviesInfoGroup">
        <p class="moviesTitle">Title</p>
        <p class="moviesRating">rating</p>
        <p class="moviesDes">Description</p>
        <button class="moviesBtn">Find out more.</button>
      </div>
    </div>
    <the-trailers-section/>
    
  </div>
</template>


<script>

import TheTrailersSection from '../components/layouts/TheTrailersSection.vue'

export default {
    components: {
        TheTrailersSection
    },
    setup() {
        
    },
}
</script>

<style scoped>
.mainSection {
  background: blue;
  height: 100vh;
}

.moviesInfoGroup {
  background: red;
  max-width: 20%;
  min-width: 17rem;
  position: relative;
  height: 30%;
  top: 60%;
  left: 5%;
}

.moviesTitle {
  font-size: 5rem;
}

.moviesRating {
  font-size: 3rem;
  margin: 0.5rem;
}

.moviesDes {
  font-size: 2rem;
  margin: 0.5rem;
}

.moviesBtn {
  font-size: 2rem;
}
</style>
