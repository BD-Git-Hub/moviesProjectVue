<template>
  <div class="container">
    <the-search-bar-group @search-submitted="searchSubmitted" />
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
  setup() {
    return {

    }
  },
  emits: ['search-submitted'],
  methods: {
    searchSubmitted(selectedGenre, selectedRating, userInput) {
      this.$emit("search-submitted", selectedGenre, selectedRating, userInput);
    },
  },
};
</script>

<style scoped>
.container {
  height: 9vh;
  background: #252525;
  margin-inline: auto;
  width: 100%;
}
</style>
