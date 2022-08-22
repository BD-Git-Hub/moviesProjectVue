<template>
  <div>
    <the-navigation-bar> </the-navigation-bar>
    <router-view />
    <!-- <p v-if="fetchedData">{{ fetchedData }}</p>
    <p v-else>No Data</p> -->
  </div>
</template>

<script>
import TheNavigationBar from "./components/layouts/TheNavigationBar.vue";
import { getData } from "./fetch/fetchAPI";

export default {
  components: { TheNavigationBar },
  mounted() {
    const dataRetrieval = async () => {
      const data = await getData();
      console.log(data[0].results);

      let movies = [];
      

      

      


      



    };
    dataRetrieval();
  },
  methods: {
    randomFilmNumber() {
      const randomNumber = Math.floor(Math.random() * 100);
      return randomNumber;
    },
  },
  data() {
    return {
      fetchedData: [],
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
