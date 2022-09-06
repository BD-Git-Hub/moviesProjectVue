<template>
  <div :style="containerDiv">
    <img :src="randomFilePath" />

    <div class="selectedFilmDivGrp" v-if="selectedFilmToggle && !modalDisplay">
      <div v-for="data in selectedDataInfo" :key="data.id">
        <h1 class="selectedFilmh1">{{ data.name }}</h1>
        <p>{{ data.voteAverage.toFixed(1) }}</p>
        <button @click="toggleMoreInfoModel">More Info</button>
      </div>
    </div>
    <Teleport to=".backdropContainer" v-else>
      <div class="backdrop" @click="toggleMoreInfoModel">
        <div class="modelDiv">
          <base-button class="closeBtn" @click="toggleMoreInfoModel"
            >X</base-button
          >
          <img :src="randomFilePath" class="modelImg" />

          <div
            v-for="data in selectedDataInfo"
            :key="data.id"
            class="modelInfoContainer"
          >
            <div class="modelInfoGrp">
              <h1 class="modelh1">{{ data.name }}</h1>
              <p class="modelInfoRating">{{ data.voteAverage.toFixed(1) }}</p>
              <p class="modelInfoGenre" v-if="data.genres[0].name">
                {{ data.genres[0].name }}
              </p>
              <p v-else-if="data.genres[1].name">{{ data.genres[1].name }}</p>
              <p v-else-if="data.genres[2].name">{{ data.genres[2].name }}</p>
              <p v-else>No Genre Info</p>
              <p class="modalInfoDescription">{{ data.description }}</p>
              <div class="charactersInfoGrp">
                <div
                  class="CharacterInfoItem"
                  v-for="data in selectedDataCredits"
                  :key="data.id"
                >
                  <p>character name:</p>
                  <p>{{ data.name }}</p>
                  <p>Played by:</p>
                  <p>{{ data.character }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import baseButton from "../UI/BaseButton.vue";

export default {
  components: {
    baseButton,
  },
  methods: {
    toggleMoreInfoModel() {
      console.log(this.modalDisplay);
      this.modalDisplay = !this.modalDisplay;
    },
  },
  data() {
    return {
      modalDisplay: false,
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
  inject: [
    "selectedDataImage",
    "selectedDataCredits",
    "selectedFilmName",
    "selectedFilmToggle",
    "selectedDataInfo",
  ],

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

.selectedFilmh1 {
  text-transform: uppercase;
  z-index: 20;
  font-size: 2.5vmax;
}

img {
  width: 100%;
  height: 100%;
  min-width: 20rem;
}

.backdrop {
  position: absolute;
  width: 100%;
  height: 114%;
  background-color: rgba(120, 120, 120, 0.9);
}

.closeBtn {
  position: absolute;
  right: 1rem;

  color: rgb(235, 235, 235);
  background: transparent;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  transition: 1s;
}

.closeBtn:hover {
  transition: 1s;
  color: orange;
}

.modelDiv {
  position: absolute;
  background-color: rgba(75, 75, 75);

  height: 100%;
  width: 40vw;
  margin-left: 30vw;
  margin-right: 30vw;

  overflow: hidden;
}

.modelImg {
  height: 100%;
  max-height: 100%;
  width: 100%;
}

.modelInfoContainer {
  position: absolute;
  top: 40%;
  height: 10%;
  background-image: linear-gradient(180deg, transparent, rgb(53, 53, 53));
}

.modelh1 {
  position: relative;
  color: white;
  text-transform: uppercase;
  font-size: 2.8vmax;
}

.modelInfoGrp {
  position: relative;
  top: 100%;
  height: 100vh;
  color: white;
  background-color: rgb(53, 53, 53);
}

.modelInfoGrp > p {
  display: inline-block;
  font-size: 1.5vw;
}

.modelInfoRating,
.modelInfoGenre {
  color: orange;
  font-size: 2.5vw;
  margin: 0.5rem;
  background-color: rgb(75, 75, 75);
  border-radius: 0.5rem;
}

.modalInfoDescription {
  font-size: 1.5vw;
}

.charactersInfoGrp {
  background-color: orange;
  height: 16rem;
  width: inherit;
  overflow: hidden;
}

.CharacterInfoItem {
  width: 10%;
  background-color: red;
  margin: 0.5rem;
  text-align: center;
  display: inline-block;
}
</style>
