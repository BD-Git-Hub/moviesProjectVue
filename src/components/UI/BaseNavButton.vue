<template>
  <button :type="type">
    <slot>{{ title }}</slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: "text",
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
button {
  font-size: 1.5rem;
  color: white;
  background-color: #252525;
  padding: 0.5rem;
  border-right: solid black 0.1rem;
  border-bottom: solid black 0.1rem;
  border-radius: 0.5rem;
  transition: 1s;
}

button:hover {
  border-right: solid pink 0.1rem;
  border-bottom: solid orange 0.1rem;
  box-shadow: 0.1rem 0.1rem 1rem orange;
  cursor: pointer;
  transition: 0.3;
}
</style>
