<template>
  <div>
    <router-link to="/watchlist"><base-nav-button title="Watchlist"/></router-link>
    <router-link to="/home"><base-nav-button title="Home"/></router-link>
    <!-- <router-link to="/login"><base-nav-button title="Login"/></router-link> -->
    
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
