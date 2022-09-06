<template>
  <div class="submitFormDiv">
    <form @submit.prevent="searchSubmit">
      <input type="text" v-model="userInput" placeholder="search a film..." />
      <select name="Genre" v-model="selectedGenre" class="genreSelect">
        <option v-for="data in genresData" :key="data.id" :value="data.name">
          {{ data.name }}
        </option>
      </select>
      <select name="Rating" v-model="selectedRating" class="ratingSelect">
        <option value="10">10</option>
        <option value="9">9</option>
        <option value="8">8</option>
        <option value="7">7</option>
        <option value="6">6</option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>

      <base-submit-button title="submit" class="submitBtn" />
    </form>
  </div>
</template>

<script>
import BaseSubmitButton from "../UI/BaseSubmitButton.vue";

export default {
  components: {
    BaseSubmitButton,
  },
  setup() {
    return {};
  },
  inject: ["genresData"],
  emits: ["search-submitted"],
  mounted() {},

  methods: {
    searchSubmit() {
      let selectedGenre = this.selectedGenre;
      let selectedRating = this.selectedRating;
      let userInput = this.userInput;

      this.$emit("search-submitted", selectedGenre, selectedRating, userInput);
      this.resetInputFields();
    },
    resetInputFields() {
      this.selectedGenre = "Action";
      this.selectedRating = "10";
      this.userInput = "";
    },
  },
  data() {
    return {
      selectedGenre: "Action",
      selectedRating: "10",
      userInput: "",
    };
  },
};
</script>

<style scoped>
.submitFormDiv {
  float: left;
  margin-top: 1rem;
}

.genreSelect {
  cursor: pointer;
  width: 10vw;
  min-width: 5.7rem;
  background-color: #252525;
  color: white;
  font-size: 1.4rem;
  height: 3.19rem;
  border: 1px solid grey;
}

.ratingSelect {
  cursor: pointer;
  font-size: 1.4rem;
  height: 3.19rem;
  background-color: #252525;
  color: white;
  text-decoration: none;
  border: 1px solid grey;
}

input {
  width: 40%;
  cursor: pointer;
  font-size: 1.5rem;
  height: 3.05rem;
  border-radius: 0.5rem 0rem 0rem 0.5rem;
  background-color: #252525;
  border: 1px solid grey;
  color: white;
}



.submitBtn {
  height: 3.15rem;
  font-size: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  color: white;
  cursor: pointer;
  text-decoration: none;
  border: none;
  outline: inherit;
  background-color: black;
  border-radius: 0rem 0.5rem 0.5rem 0;
  border: 1px solid grey;
  /* transition: 1s; */
}

/* .submitBtn:hover {
  box-shadow: 0.1rem 0.1rem 1rem orange;
  transition: 1s;
} */

.genreSelect, .ratingSelect, input, .submitBtn {
  transition: 1s;

}

.genreSelect:hover, .ratingSelect:hover, input:hover, .submitBtn:hover {
  box-shadow: 0.1rem 0.1rem 1rem orange;
  transition: 1s;

}

.genreSelect:focus, .genreSelect:focus, .ratingSelect:focus, input:focus, .submitBtn:focus {
  outline: orange;
  border-color: orange;

}

.genreSelect option:focus {
  background-color: orange;
}




</style>
