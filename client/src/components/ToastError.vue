<template>
    <div class="fixed bottom-4 right-4 bg-red-600 text-white p-4 rounded shadow-lg">
      <p>{{ message }}</p>
      <button @click="$emit('close')" class="mt-2 text-white underline">ปิด</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['message'],
  };
  </script>
  
  <style scoped>
  
  </style>
  