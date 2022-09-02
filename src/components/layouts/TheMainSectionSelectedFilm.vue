<template>
  <div :style="containerDiv" v-if="selectedDataImage">
    <img :src="randomFilePath" />
    <div class="titleDivGrp">
      <h1>{{ selectedFilmName }}</h1>
      <p>Rating</p>
      <p>Description</p>
    </div>
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
        minWidth: "36rem",
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
      } else if (lowImagesSizeArr.length) {
        return lowImagesSizeArr[
          Math.floor(Math.random() * lowImagesSizeArr.length)
        ].filePath;
      } else {
        return this.dataImages;
      }
    },
  },
};
</script>

<style>
.titleDivGrp {
  color: white;
  background-color: rgba(120, 120, 120, 0.3);
  width: auto;
  position: absolute;
  bottom: 20%;
  left: 5%;
  border-radius: 1rem;
}

h1 {
  text-transform: uppercase;
  z-index: 20;
  font-size: 2vmax;
}

img {
  width: 100%;
  height: auto;
  min-width: 20rem;
}
</style>
