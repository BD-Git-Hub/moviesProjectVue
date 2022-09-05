<template>
  <div class="footerSection">
    <a href="https://www.themoviedb.org/documentation/api"><p>The Movie Database API</p></a>
    <a href="https://antoniandre.github.io/vueper-slides/"
      ><p>vueper-slides package</p></a
    >
    <a href="https://vuejs.org/"><p>Vue.js</p></a>
    <a href="https://bovin-desouza.co.uk/"><p>© Bovin De Souza</p></a>
  </div>
</template>

<style scoped>
.footerSection {
  height: 5rem;
  background-color: #121212;

}

p {
  font-size: 1.9vw;
  

  display: inline;
  margin: 1.5rem 1rem 1.5rem 1rem;
  color: white;
  border-right: solid black 0.1rem;
  border-bottom: solid black 0.1rem;
  box-shadow: 0.1rem 0.1rem 1rem black;
  border-radius: 0.5rem;
}

a {
    text-decoration: none;
}

p:hover {
  cursor: pointer;
  border-right: solid pink 0.1rem;
  border-bottom: solid orange 0.1rem;

  box-shadow: 0.1rem 0.1rem 0.5rem orange;
}
</style>
