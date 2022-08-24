<template>
  <div class="container">
    <the-search-bar-group @searchSubmitted="searchSubmitted" />
    <the-navigation-group />
  </div>
</template>

<script>
import TheNavigationGroup from "../layouts/TheNavigationGroup.vue";
import TheSearchBarGroup from "../layouts/TheNavigationSearchGrp.vue";

export default {
  components: {
    TheSearchBarGroup,
    TheNavigationGroup,
  },
  setup() {},
  methods: {
    searchSubmitted(selectedGenre, selectedRating, userInput) {
      this.$emit("searchSubmitted", selectedGenre, selectedRating, userInput);
    },
  },
};
</script>

<style scoped>
.container {
  height: 8vh;
  background: red;
  margin-inline: auto;
  width: 100%;
}
</style>
