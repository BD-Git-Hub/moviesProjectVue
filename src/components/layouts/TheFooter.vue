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
  background-color: #252525;
}

p {
  display: inline;
  margin: 1.5rem 1rem 1.5rem 1rem;
  color: white;
  border-top: solid transparent 0.1rem;
  border-left: solid transparent 0.1rem;
}

a {
    text-decoration: none;
}

p:hover {
  border-top: solid red 0.1rem;
  border-left: solid red 0.1rem;
  cursor: pointer;
}
</style>
