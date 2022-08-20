<template>
  <div>
    <router-link to="/watchlist"><base-nav-button title="Watchlist"/></router-link>
    <router-link to="/trailers"><base-nav-button title="trailers"/></router-link>
    <router-link to="/ratings"><base-nav-button title="rating"/></router-link>
    <router-link to="/login"><base-nav-button title="login"/></router-link>
  </div>
</template>

<script>
import BaseNavButton from '../UI/BaseNavButton.vue';
export default {
  components: {BaseNavButton},
};
</script>

<style scoped>
div {
    float: right;
}
</style>
