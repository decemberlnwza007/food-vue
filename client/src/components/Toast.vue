<template>
    <div
      v-if="show"
      class="fixed top-5 right-5 bg-green-500 text-white p-4 rounded shadow-lg transition duration-300"
      @click="show = false"
    >
      {{ message }}
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: {
        type: String,
        required: true,
      },
      duration: {
        type: Number,
        default: 3000,
      },
    },
    data() {
      return {
        show: true,
      };
    },
    mounted() {
      setTimeout(() => {
        this.show = false;
      }, this.duration);
    },
  };
  </script>
  
  <style scoped>
  .fixed {
    z-index: 9999;
  }
  </style>
  