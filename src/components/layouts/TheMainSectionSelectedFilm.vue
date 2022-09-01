<template>
  <div :style="containerDiv" v-if="selectedDataImage">
    <div class="titleDiv">
      <h1>{{ selectedFilmName }}</h1>
    </div>
    <img :src="randomFilePath" />

  </div>
  <div v-else>
    <p>NO DATA!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataImages: this.selectedDataImage,
      containerDiv: {
        height: "100%",
        maxHeight: "61rem",
        width: "100%",
        maxWidth: "100%",
        backgroundColor: "black",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
        overflow: "hidden",
        zIndex: "0",
      },
    };
  },
  inject: ["selectedDataImage", "selectedDataCredits", "selectedFilmName"],
  computed: {
    randomFilePath() {
      const maxImageSizeArr = [];
      const lowImagesSizeArr = [];

      this.dataImages.forEach((item) => {
        if (item.height === 3000 && item.width === 2000) {
          maxImageSizeArr.push(item);
          return;
        } else {
          lowImagesSizeArr.push(item);
        }
      });

      if (maxImageSizeArr.length) {
        return maxImageSizeArr[
          Math.floor(Math.random() * maxImageSizeArr.length)
        ].filePath;
      } else {
        return lowImagesSizeArr[
          Math.floor(Math.random() * lowImagesSizeArr.length)
        ].filePath;
      }
    },
  },
};
</script>

<style>
h1 {
  text-transform: uppercase;
  z-index: 20;
}

.titleDiv {
  color: white;
  background-color: red;
  width: auto;
  
}

img {
  width: 100%;
  height: auto;
}
</style>
