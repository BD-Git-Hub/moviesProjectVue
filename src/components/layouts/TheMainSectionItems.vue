<template>
  <div :style="imageDiv" class="divStyle"></div>
</template>

<script>
export default {
  props: [
    "name",
    "description",
    "releaseDate",
    "voteAverage",
    "posterURL",
    "id",
  ],

  data() {
    return {
      mouseHover: false,
      imageDiv: {
        height: "14rem",
        width: "14rem",
        backgroundImage: "url(" + this.posterURL + ")",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
        margin: "1rem",
        borderRadius: "0.8rem",
        cursor: "pointer",
      },
    };
  },
};
</script>

<style scoped>
.divStyle {
  border-right: solid black 0.2rem;
  border-bottom: solid black 0.2rem;
  transition: 2.5s;

}

.divStyle:hover {
  border-right: solid pink 0.2rem;
  border-bottom: solid orange 0.2rem;
  box-shadow: 0.1rem 0.1rem 1rem orange;
  transition: 0.3s;

}

h1 {
  color: white;
}

p {
  color: white;
}
</style>
