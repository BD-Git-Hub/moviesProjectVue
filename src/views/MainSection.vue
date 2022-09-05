<template>
  <div>
    <div class="mainSection">
      <div v-if="submitSectionDisplay">
        <the-main-section-items
          v-for="data in searchData"
          :key="data.id"
          :name="data.name"
          :description="data.description"
          :releaseDate="data.releaseDate"
          :voteAverage="data.voteAverage"
          :posterURL="data.posterURL"
          :id="data.id"
          @click="selectedFilmSubmitted(data.id, data.name, submitSection)"
        />
      </div>
      <the-main-section-selected-film v-else-if="selectedFilmToggle"/>
      <div v-else>
        <h1>Welcome to FilmFlick</h1>
        <p>Search your favourite film</p>
        <p>Add films to your watchlist</p>
        <p>check out new up coming films</p>
        <the-main-section-items
          v-for="data in trendingDayData"
          :key="data.id"
          :name="data.name"
          :description="data.description"
          :releaseDate="data.releaseDate"
          :voteAverage="data.voteAverage"
          :posterURL="data.posterURL"
          :id="data.id"
          @click="selectedFilmSubmitted(data.id, data.name, welcomeSection)"
        />
      </div>
    </div>
    <the-genres title="GENRES" />
    <the-trailers title="TRAILERS"/>
    <the-ratings title="RATINGS" />
    <the-footer />
  </div>
</template>

<script>
import TheTrailers from "../components/layouts/TheTrailers.vue";
import TheFooter from "../components/layouts/TheFooter.vue";
import TheGenres from "@/components/layouts/TheGenres.vue";
import TheRatings from "@/components/layouts/TheRatings.vue";
import TheMainSectionItems from "@/components/layouts/TheMainSectionItems.vue";
import TheMainSectionSelectedFilm from "@/components/layouts/TheMainSectionSelectedFilm.vue";

export default {
  inject: ["trendingDayData", "searchData", "submitSectionDisplay", "selectedFilmToggle", "selectedFilmSubmitted"],
  components: {
    TheTrailers,
    TheFooter,
    TheGenres,
    TheRatings,
    TheMainSectionItems,
    TheMainSectionSelectedFilm,
  },

  

  data() {
    return {
      submitSection:'submitSection',
      welcomeSection: "welcomeSection"
    };
  },
  emits: ["selected-film"],

  
};
</script>

<style scoped>
.mainSection {
  background-color: #121212;
  
  min-height: 92vh;
  height: 100%;
  width: 100%;
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

h1,
p {
  color: white;
}
</style>
