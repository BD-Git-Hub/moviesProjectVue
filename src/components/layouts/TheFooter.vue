<template>
  <div class="footerSection">
    <p>The Movie Database API</p>
    <a href="https://antoniandre.github.io/vueper-slides/"
      ><p>vueper-slides package</p></a
    >
    <p>Vue.js</p>
    <p>© Bovin De Souza</p>
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
