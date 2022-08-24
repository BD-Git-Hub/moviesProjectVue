<template>
  <div>
    <div class="mainSection">
      <div class="moviesInfoGroup">
        <p class="moviesTitle">{{ trendingDayData}}</p>
        <!-- <p class="moviesRating">{{trendingDayData[0].voteAverage}}</p>  -->
        <button class="moviesBtn">Find out more.</button>
      </div>
    </div>
    <the-genres title="Genres" />
    <the-trailers title="Trailers" />
    <the-ratings title="Ratings" />
    <the-footer />
  </div>
</template>

<script>
import TheTrailers from "../components/layouts/TheTrailers.vue";
import TheFooter from "../components/layouts/TheFooter.vue";
import TheGenres from "@/components/layouts/TheGenres.vue";
import TheRatings from "@/components/layouts/TheRatings.vue";


export default {
  inject: ["trendingDayData"],
  components: {
    TheTrailers,
    TheFooter,
    TheGenres,
    TheRatings,
  }, methods: {
    randomFilmNumber() {
      const randomNumber = Math.floor(Math.random() * 20);
      return randomNumber;
    },

  },
  mounted() {


    

  },

  data() {
    return {
      

    };
  },
};
</script>

<style scoped>
.mainSection {
  background: blue;
  height: 92vh;
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
  font-size: 1.5rem;
}

.moviesRating {
  font-size: 1.3rem;
  margin: 0.5rem;
}



.moviesBtn {
  font-size: 2rem;
}
</style>
