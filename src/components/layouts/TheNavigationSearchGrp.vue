<template>
  <div class="submitFormDiv">
    <form @submit.prevent="searchSubmit">
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
      <input type="text" v-model="userInput" placeholder="search a film..." />
      <base-submit-button title="submit" class="submitBtn"/>

     
    </form>
  </div>
</template>

<script>
  import BaseSubmitButton from '../UI/BaseSubmitButton.vue'

export default {
  components: {
    BaseSubmitButton

  },
  setup() {
    return {

    }
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
  font-size: 1.5rem;
  height: 3rem;
  cursor: pointer;

}

.ratingSelect {
  font-size: 1.5rem;
  height: 3rem;
  cursor: pointer;

}

input {
  width: 30%;
  height: 2.8rem;
  font-size: 1.5rem;
  cursor: pointer;

}

.submitBtn {
  font-size: 1.5rem;
  color: white;
  background-color: #252525;
  cursor: pointer;
  text-decoration: none;

	border: none;
	padding-top: 0.6rem;
  padding-right: 1rem;
  padding-bottom: 0.6rem;
  padding-left: 1rem;
	outline: inherit;
  background-color: red;


}


</style>
