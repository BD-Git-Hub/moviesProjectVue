<template>
  <div>
    <the-navigation-bar @search-submitted="searchSubmitted">
    </the-navigation-bar>
    <router-view @selected-film="selectedFilmSubmitted" />
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import TheNavigationBar from "./components/layouts/TheNavigationBar.vue";
import { getData, searchData } from "./fetch/fetchAPI";
const APIURL = `https://api.themoviedb.org/3/`;
const url = "https://image.tmdb.org/t/p/w500";
const originalUrl = "https://image.tmdb.org/t/p/original/";
const upcomingMovie = "movie/upcoming";
const genreList = "genre/movie/list";
const topRated = "movie/top_rated";
const trendingForDay = "trending/all/day";
const searchMovie = "search/movie";
const partOneMovie = "/movie/";
const genreSearchPartTwo = "/similar";
const searchImages = "/images";
const searchCredits = "/credits";

const dataRetrieval = async (searchParams) => {
  const data = await getData(APIURL + searchParams);
  return data;
};

const requestData = async (searchParams, userParams) => {
  const data = await searchData(APIURL + searchParams, userParams);
  return data;
};

const genreRetrieval = async (genreURLpartOne, id, genreURLpartTwo) => {
  const data = await getData(APIURL + genreURLpartOne + id + genreURLpartTwo);
  return data;
};

const requestImagesAndCredits = async (partOneMovie, id, searchImages) => {
  const data = await getData(APIURL + partOneMovie + id + searchImages);
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

    if (
      (dataArr[0].results && dataArr[0].results[0].title) ||
      (dataArr[0].results && dataArr[0].results[0].original_name)
    ) {
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

    if (dataArr[0].logos) {
      dataArr[0].posters.forEach((imageItem) => {
        storedData.push({
          filePath: originalUrl + imageItem.file_path,
          height: imageItem.height,
          width: imageItem.width,
        });
      });
      dataArr[0].backdrops.forEach((imageItem) => {
        if (imageItem.height == 1080 && imageItem.width == 1920) {
          storedData.push({
            filePath: originalUrl + imageItem.file_path,
            height: imageItem.height,
            width: imageItem.width,
          });
        } else {
          storedData.push({
            filePath: originalUrl + imageItem.file_path,
            height: imageItem.height,
            width: imageItem.width,
          });
        }
      });
    }

    if (dataArr[0].cast) {
      dataArr[0].cast.forEach((creditsItem) => {
        storedData.push({
          name: creditsItem.name,
          character: creditsItem.character,
        });
      });
    }
  });
};

const convertSearchDataToStoredData = (data, storedData, ratingNumber) => {
  data.then((response) => {
    let dataArr = [];

    if (response[0]) {
      dataArr.push(response[0]);
    } else if (response[0].results) {
      dataArr.push(response[0]);
    }

    if (dataArr[0].results && ratingNumber) {
      let maxRatingArr = [];

      maxRatingArr.push(
        cutOffToMaxRatingNumber(dataArr[0].results, ratingNumber)
      );

      maxRatingArr[0].sort((firstItem, secondItem) => {
        if (firstItem.vote_average > secondItem.vote_average) {
          return -1;
        } else if (firstItem.vote_average < secondItem.vote_average) {
          return 1;
        } else {
          return 0;
        }
      });

      maxRatingArr[0].forEach((dataItem) => {
        storedData.push({
          name: dataItem.original_title || dataItem.name || dataItem.title,
          id: dataItem.id,
          description: dataItem.overview,
          posterURL: url + dataItem.poster_path,
          voteAverage: dataItem.vote_average,
          voteCount: dataItem.vote_count,
          releaseDate: dataItem.release_date,
          genreID: dataItem.genre_ids,
        });
      });
    }
  });
};

const cutOffToMaxRatingNumber = (arr, ratingNumber) => {
  const maxRatingArr = arr.filter(
    (arrItem) => arrItem.vote_average < ratingNumber
  );

  return maxRatingArr;
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
  provide() {
    return {
      trailerData: this.trailersData,
      genresData: this.genresData,
      ratingsData: this.ratingsData,
      trendingDayData: this.trendingDayData,
      searchData: computed(() => this.searchData),
      selectedDataImage: computed(() => this.selectedDataImage),
      selectedDataCredits: computed(() => this.selectedDataCredits),
      selectedFilmName: computed(() => this.selectedFilmName),
      selectedFilmSubmitted: this.selectedFilmSubmitted,
      selectedFilmToggle: computed(() => this.selectedFilmToggle),
      submitSectionDisplay: computed(() => this.submitSectionDisplay),
    };
  },
  methods: {
    randomFilmNumber() {
      const randomNumber = Math.floor(Math.random() * 20);
      return randomNumber;
    },
    searchSubmitted(selectedGenre, selectedRating, userInput) {
      this.clearSearchData();
      this.clearSelectedData();
      let searchData = [];
      const ratingNumber = selectedRating;
      const submitClicked = "submitClicked";
      this.toggleDisplays(submitClicked);

      if (userInput) {
        const queryUserInput = "&query=" + userInput;
        searchData = requestData(searchMovie, queryUserInput);

        convertSearchDataToStoredData(
          searchData,
          this.searchData,
          ratingNumber
        );
      } else {
        const receivedId = this.findGenre(selectedGenre, this.genresData);
        searchData = genreRetrieval(
          partOneMovie,
          receivedId,
          genreSearchPartTwo
        );

        convertSearchDataToStoredData(
          searchData,
          this.searchData,
          ratingNumber
        );
      }
    },
    clearSearchData() {
      this.searchData = [];
    },
    clearSelectedData() {
      this.selectedDataImage = [];
      this.selectedDataCredits = [];
      this.selectedFilmName = "";
    },
    findGenre(chosenGenre, genreData) {
      let foundID = "";

      genreData.forEach((item) => {
        if (item.name === chosenGenre) {
          foundID = item.id;
        }
      });

      return foundID;
    },

    toggleDisplays(sectionName) {

      if (sectionName === "welcomeSection") {
        this.selectedFilmToggle = true;
        this.submitSectionDisplay = false;
      } else if (sectionName === "trailerSection") {
        this.selectedFilmToggle = true;

        this.submitSectionDisplay = false;
      } else if (sectionName === "submitClicked") {
        this.selectedFilmToggle = false;
        this.submitSectionDisplay = true;
      } else if (sectionName === "submitSection") {
        this.selectedFilmToggle = true;
        this.submitSectionDisplay = false;
      } 

    },
    selectedFilmSubmitted(filmID, filmName, sectionName) {
      this.clearSearchData();
      this.clearSelectedData();

      this.toggleDisplays(sectionName);

      requestData(searchMovie, filmName);

      const selectedImageData = requestImagesAndCredits(
        partOneMovie,
        filmID,
        searchImages
      );

      const selectedCreditsData = requestImagesAndCredits(
        partOneMovie,
        filmID,
        searchCredits
      );

      convertDataToStoredData(selectedImageData, this.selectedDataImage);
      convertDataToStoredData(selectedCreditsData, this.selectedDataCredits);
      this.selectedFilmName = filmName;
    },
  },

  data() {
    return {
      trailersData: [],
      genresData: [],
      ratingsData: [],
      trendingDayData: [],
      searchData: [],
      selectedDataImage: [],
      selectedDataCredits: [],
      selectedFilmName: "",
      submitSectionDisplay: false,
      selectedFilmToggle: false,
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
