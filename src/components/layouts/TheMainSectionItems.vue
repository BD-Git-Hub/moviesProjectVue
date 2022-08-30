<template>
  <div
    :style="imageDiv"
    class="divStyle"
    
  >
    <!-- <h1>{{ name }}</h1>
      <p>{{ releaseDate }}</p>
    <p>{{ voteAverage }}</p>  -->
  </div>

  <!-- <div class="image">
    <h1>{{name}}</h1>
    <p>{{releaseDate}}</p>
    <p>{{voteAverage}}</p>
</div> -->
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
}

.divStyle:hover {
  border-right: solid red 0.2rem;
  border-bottom: solid red 0.2rem;
}

h1 {
  color: white;
}

p {
  color: white;
}
</style>
