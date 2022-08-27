<template>
  <div>
    <div class="mainSection">
      
      <the-main-section-items v-for="data in searchedData" :key="data.id" :name="data.name" :description="data.description" :releaseDate="data.releaseDate" :voteAverage="data.voteAverage" :posterURL="data.posterURL" :id="data.id"/>
      <!-- <div class="moviesInfoGroup">
        <p class="moviesTitle">{{ trendingDayData}}</p>
         <p class="moviesRating">Rating</p> 
        <button class="moviesBtn">Find out more.</button>
      </div> -->
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
import TheMainSectionItems from "@/components/layouts/TheMainSectionItems.vue";

export default {
  inject: ["trendingDayData", "searchData"],
  components: {
    TheTrailers,
    TheFooter,
    TheGenres,
    TheRatings,
    TheMainSectionItems
},

 updated() {
      
  },
  methods: {
    randomFilmNumber() {
      const randomNumber = Math.floor(Math.random() * 20);
      return randomNumber;
    },
  }, 
  

  data() {
    return {
      searchedData: this.searchData
    };
  },
};
</script>

<style scoped>
.mainSection {
  background: blue;
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
</style>
