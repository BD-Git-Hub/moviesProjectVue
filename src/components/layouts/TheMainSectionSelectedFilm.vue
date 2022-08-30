<template>
  <div :style="imageDiv">
    <h1>{{ selectedFilmName }}</h1>
    <div class="imageGrp">
      <!-- <img
        :src="DataImage[Math.floor(Math.random() * DataImage.length)].filePath" 
      /> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      DataImage: this.selectedDataImage,
      imageDiv: {
        height: "55rem",
        width: "100%",
        backgroundColor: "black",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      },
    };
  },
  inject: ["selectedDataImage", "selectedDataCredits", "selectedFilmName"],
};
</script>

<style>
h1 {
  text-transform: uppercase;
}

h1,
p {
  color: white;
}

.imageGrp {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 100%rem;
  background-color: red;
}
</style>
