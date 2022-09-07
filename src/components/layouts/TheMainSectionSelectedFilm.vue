<template>
  <div :style="containerDiv" class="containerDiv">
    <img :src="randomFilePath" />

    <div class="selectedFilmDivGrp" v-if="selectedFilmToggle && !modalDisplay">
      <div v-for="data in selectedDataInfo" :key="data.id">
        <h1 class="selectedFilmh1">{{ data.name }}</h1>
        <p class="selectedFilmP">{{ data.voteAverage.toFixed(1) }}</p>
        <base-button class="moreInfoBtn" @click="toggleMoreInfoModel">More Info</base-button>
      </div>
    </div>
    <Teleport to=".backdropContainer" v-else>
      <div class="backdrop" @click="toggleMoreInfoModel">
        <div class="modelDiv">
          <base-button class="closeBtn" @click="closeModel"
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
                | {{ data.genres[0].name }}
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
                  <p class="characterLabel">character:</p>
                  <p class="characterLabelInfo">{{ data.character }}</p>
                  <p class="characterLabel">name:</p>
                  <p class="characterLabelInfo">{{ data.name }}</p>
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
    closeModel() {
      this.toggleMoreInfoModel
    }
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
        top: "20%",
        backgroundColor: "black",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
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
.selectedFilmImgAnimation {
  animation: mover 5s infinite alternate;
}

@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}

.selectedFilmDivGrp {
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 5%;
  left: 2vw;
  width: 20vw;
  min-width: 30vw;
  height: auto;
  border-radius: 1rem;
  transition: 1s;
  
  
}

.selectedFilmDivGrp:hover {
  background-color: rgba(0, 0, 0, 0.7);
  transition: 1s;



}

.selectedFilmh1 {
  margin: 0.5rem;
  text-transform: uppercase;
  z-index: 20;
  font-size: 2.5vmax;
}

.selectedFilmP {
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
  background-color: rgba(0, 0, 0, 0.5);
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
  background-color: #121212;
  height: 100vh;
  width: 40vw;
  margin-left: 30vw;
  margin-right: 30vw;
  border-radius: 1rem;

  overflow: hidden;
}

.modelImg {
  min-height: 40rem;
  width: 100%;
  min-width: 30rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: auto;


}

.modelInfoContainer {
  position: absolute;
  top: 40%;
  height: 10%;
  background-image: linear-gradient(180deg, transparent, #121212);
}

.modelInfoGrp {
  position: relative;
  top: 100%;
  height: 100vh;
  color: white;
  background-color: #121212;
  display: inline-block

  
}

.modelh1 {
  position: relative;
  color: white;
  text-transform: uppercase;
  font-size: 2.8vmax;
}

.modelInfoGrp > p {
  display: inline-block;
  
} 

.modelInfoRating,
.modelInfoGenre {
  color: orange;
  font-size: 2.5vw;
  margin: 0.5rem;
  border-radius: 0.3rem;
}

.modalInfoDescription {
  font-size: 1vw;
  
}

.charactersInfoGrp {
  margin-top: 1rem;
  height: 16rem;
  overflow: hidden;
  
  
}

.CharacterInfoItem {
  width: 7.4vw;
  margin: 0.3vmin;
  background-color: rgb(75, 75, 75);
  border-radius: 0.3rem;
  text-align: center;
  min-height: 70%;
  float: left;
  
}

.characterLabel {
  font-size: 1vw;
  color: orange
}

.characterLabelInfo {
  font-size: 1.2vw;
}
</style>
