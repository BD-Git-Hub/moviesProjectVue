<template>
  <div :style="containerDiv">
    <img :src="randomFilePath" />

  
      <div class="selectedFilmDivGrp" v-if="selectedFilmToggle">
        <div v-for="data in selectedDataInfo" :key="data.id">
          <h1>{{ data.name }}</h1>
          <p>{{data.voteAverage}}</p>
          <button>More Info</button>
          

        </div>
        <!-- <div class="castDivGrp">
          <div
            class="castGrpItem"
            v-for="credit in selectedDataCredits"
            :key="credit.name"
          >
            <p class="castItem">Real name:</p>
            <p class="castItem">{{ credit.name }}</p>
            <p class="castItem">Character:</p>
            <p class="castItem">{{ credit.character }}</p>
          </div>
        </div> -->
      </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        zIndex: "0",
        overflow: "hidden",
      },
    };
  },
  inject: ["selectedDataImage", "selectedDataCredits", "selectedFilmName", "selectedFilmToggle", "selectedDataInfo"],

  computed: {
    randomFilePath() {
      const maxImageSizeArr = [];
      const lowImagesSizeArr = [];

      this.selectedDataImage.forEach((item) => {
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
        return this.selectedDataImage;
      }
    },
  },
};
</script>

<style>
.selectedFilmDivGrp {
  color: white;
  background-color: rgba(120, 120, 120, 0.7);
  position: absolute;
  top: 75%;
  left: 2vw;
  width: auto;
  height: 10rem;
  overflow: hidden;
}

h1 {
  text-transform: uppercase;
  z-index: 20;
  font-size: 2.5vmax;
}

img {
  width: 100%;
  height: auto;
  min-width: 20rem;
}

.castDivGrp {
  position: absolute;
  background-color: rgba(120, 120, 120, 0.7);
  height: 13vh;
  width: 40%;
  bottom: 0%;
  left: 0%;
  overflow: hidden;
}

.castGrpItem {
  background-color: red;
  width: 10vw;
  display: inline-block;
  margin: 0.5rem;
}

.castItem {
  color: white;
  font-size: 1.2vw;
}
</style>
