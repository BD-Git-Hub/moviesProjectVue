<template>
  <div>
    <router-link to="/watchlist"
      ><base-nav-button title="Watchlist" class="watchlistBtn"
    /></router-link>
    <router-link to="/home"
      ><base-nav-button title="Home" class="homeBtn"
    /></router-link>
    <!-- <router-link to="/login"><base-nav-button title="Login"/></router-link> -->
  </div>
</template>

<script>
import BaseNavButton from "../UI/BaseNavButton.vue";
export default {
  components: { BaseNavButton },
};
</script>

<style scoped>
@media only screen and (min-width: 821px) {
  .watchlistBtn,
  .homeBtn {
    float: right;
  }
}
@media only screen and (max-width: 820px) {
  .watchlistBtn {
    width: 83%;
    margin: 0.5rem;
  }

  .homeBtn {
    width: 83%;
    margin: 0.5rem;
  }
}
</style>
