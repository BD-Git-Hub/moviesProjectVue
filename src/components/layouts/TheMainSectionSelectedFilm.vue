<template>
  <div :style="imageDiv">
    <div class="imageGrp">
      <h1>{{ selectedFilmName }}</h1>
      <img :src="randomFilePath" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataImages: this.selectedDataImage,
      imageDiv: {
        height: "55rem",
        width: "100%",
        maxWidth: "100%",
        backgroundColor: "black",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
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

      if (maxImageSizeArr.length > 0) {
        return maxImageSizeArr[
          Math.floor(Math.random() * maxImageSizeArr.length - 1)
        ].filePath;
      } else {
        return lowImagesSizeArr[
        Math.floor(Math.random() * lowImagesSizeArr.length - 1)
      ].filePath;
      }
    },
  },
};
</script>

<style>
h1 {
  text-transform: uppercase;
  z-index: 5;
}

h1,
p {
  color: white;
}

.imageGrp {
  height: 100%;
  overflow: hidden;
  background-color: black;
}

img {
  width: 100%;
  height: auto;
  
}
</style>
