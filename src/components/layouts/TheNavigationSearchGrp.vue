<template>
  <div>
    <form @submit.prevent="searchSubmit">
      <select name="Genre" v-model="selectedGenre">
        <option v-for="data in genresData" :key="data.id" :value="data.name">
          {{ data.name }}
        </option>
      </select>
      <select name="Rating" v-model="selectedRating">
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
      <base-nav-button title="Submit" type="submit"></base-nav-button>

      <!-- <base-nav-button title="Genre"></base-nav-button> -->
      <!-- <base-nav-button title="Rating"></base-nav-button>
        <input type="text" /> -->
    </form>
  </div>
</template>

<script>
import BaseNavButton from "../UI/BaseNavButton.vue";

export default {
  setup() {},
  components: { BaseNavButton },
  inject: ["genresData"],
  emits: ["searchSubmitted"],
  
  methods: {
    searchSubmit() {
      let selectedGenre = this.selectedGenre;
      let selectedRating = this.selectedRating;
      let userInput = this.userInput;

      this.$emit("searchSubmitted", selectedGenre, selectedRating, userInput);
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
div {
  float: left;
}

input {
  width: 30%;
  height: 3rem;
  font-size: 1.5rem;
}
</style>
