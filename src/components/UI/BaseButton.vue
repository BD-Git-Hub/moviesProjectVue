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
  margin: 1rem;
  font-size: 1.5rem;
  padding: 0.5rem;
}
</style>
