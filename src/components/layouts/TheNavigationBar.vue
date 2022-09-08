<template>
  <div :class="navToggle ? 'container-enlarged' : 'container'">
    <div class="nav-menu">
      <base-button title="Enlarge" @click="toggleNavContent" class="enlargeBtn"></base-button>
    </div>
    <the-navigation-group />
    <the-navigation-search-group @search-submitted="searchSubmitted" />
  </div>
</template>

<script>
import TheNavigationGroup from "../layouts/TheNavigationGroup.vue";
import TheNavigationSearchGroup from "../layouts/TheNavigationSearchGrp.vue";
import BaseButton from "../UI/BaseButton.vue";

export default {
  components: {
    BaseButton,
    TheNavigationSearchGroup,
    TheNavigationGroup,
  },
  data() {
    return {
      navToggle: false,
    };
  },
  emits: ["search-submitted"],
  methods: {
    searchSubmitted(selectedGenre, selectedRating, userInput) {
      this.$emit("search-submitted", selectedGenre, selectedRating, userInput);
    },
    toggleNavContent() {
      this.navToggle = !this.navToggle;
    },
  },
};
</script>

<style scoped>
.container {
  height: 11vh;
  background: black;
  transition: 0.7s;
  border-bottom: orange solid 0.1rem;
}

.container-enlarged {
  height: 45vh;
  background: pink;
  transition: 0.7s;
}

.nav-menu {
  display: none;
  justify-content: center;
}

@media only screen and (max-width: 820px) {
  .nav-menu {
    display: flex;
    justify-content: center;
  }

  .enlargeBtn {
    width: 83%;


  }
}
</style>
