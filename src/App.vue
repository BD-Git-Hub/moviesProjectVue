<template>
  <div>
    <the-navigation-bar @searchSubmitted="searchSubmitted">
    </the-navigation-bar>
    <router-view />
  </div>
</template>

<script>
import TheNavigationBar from "./components/layouts/TheNavigationBar.vue";
import { getData, searchData } from "./fetch/fetchAPI";
const APIURL = `https://api.themoviedb.org/3/`;
const url = "https://image.tmdb.org/t/p/w500";
const upcomingMovie = "movie/upcoming";
const genreList = "genre/movie/list";
const topRated = "movie/top_rated";
const trendingForDay = "trending/all/day";
const searchMovie = "search/movie";

const dataRetrieval = async (searchParams) => {
  const data = await getData(APIURL + searchParams);
  return data;
};

const requestData = async (searchParams, userParams) => {
  const data = await searchData(APIURL + searchParams, userParams);
  return data;
};

const convertDataToStoredData = (data, storedData) => {
  data.then((response) => {
    let dataArr = [];

    if (response[0]) {
      dataArr.push(response[0]);
    } else if (response[0].results) {
      dataArr.push(response[0]);
    }

    if (dataArr[0].results) {
      dataArr[0].results.forEach((dataItem) => {
        storedData.push({
          name: dataItem.original_title || dataItem.name,
          id: dataItem.id,
          description: dataItem.overview,
          posterURL: url + dataItem.poster_path,
          voteAverage: dataItem.vote_average,
          voteCount: dataItem.vote_count,
          releaseDate: dataItem.release_date,
        });
      });
    }
    if (dataArr[0].genres) {
      dataArr[0].genres.forEach((genreItem) => {
        storedData.push({
          id: genreItem.id,
          name: genreItem.name,
        });
      });
    }
  });
};
export default {
  components: { TheNavigationBar },
  mounted() {
    const trailersData = dataRetrieval(upcomingMovie);
    const genreData = dataRetrieval(genreList);
    const ratingsData = dataRetrieval(topRated);
    const trendingDayData = dataRetrieval(trendingForDay);

    convertDataToStoredData(trailersData, this.trailersData);
    convertDataToStoredData(genreData, this.genresData);
    convertDataToStoredData(ratingsData, this.ratingsData);
    convertDataToStoredData(trendingDayData, this.trendingDayData);
  },
  watch: {},
  provide() {
    return {
      trailerData: this.trailersData,
      genresData: this.genresData,
      ratingsData: this.ratingsData,
      trendingDayData: this.trendingDayData,
      searchData: this.searchData,
    };
  },
  methods: {
    randomFilmNumber() {
      const randomNumber = Math.floor(Math.random() * 20);
      return randomNumber;
    },
    searchSubmitted(selectedGenre, selectedRating, userInput) {
      const queryUserInput = "&query=" + userInput;
      const searchData = requestData(searchMovie, queryUserInput);
      const ratingNumber = selectedRating;
      console.log(ratingNumber)


      convertDataToStoredData(searchData, this.searchData);
    },
   
  },

  data() {
    return {
      trailersData: [],
      genresData: [],
      ratingsData: [],
      trendingDayData: [],
      searchData: [],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
}
</style>
