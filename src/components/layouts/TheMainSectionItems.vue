<template>
  
    <div :style="imageDiv">
      <!-- <h1>{{ name }}</h1>
      <p>{{ releaseDate }}</p>
      <p>{{ voteAverage }}</p> -->
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
      imageDiv: {
        height: "14rem",
        width: "14rem",
        backgroundImage: "url(" + this.posterURL + ")" ,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        display: 'inline-block',
        margin: '1rem'

        
      },
    };
  },
};
</script>

<style scoped>
h1 {
  color: white;
}

p {
  color: white;
}
</style>
