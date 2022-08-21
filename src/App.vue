<template>
  <div>
    <the-navigation-bar> </the-navigation-bar>
    <router-view />
    <p v-if="fetchedData">{{ fetchedData }}</p>
    <p v-else>No Data</p>
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
       this.fetchedData.push(data)
       console.log(this.fetchedData)
    };
    dataRetrieval();

    // const data = getData();
    // console.log('data received')
    // console.log(data);
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
