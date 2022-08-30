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
        default: "submit",
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




  </style>
  