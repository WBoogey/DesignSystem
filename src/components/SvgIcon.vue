<template>
    <svg :class="`icon ${customClass}`" aria-hidden="true">
      <!-- Reference the symbol in the sprite file -->
      <use :xlink:href="`/icons.svg#${name}`" />
    </svg>
  </template>
  
  <script setup>
  const props = defineProps({
    name: {
      type: String,
      required: true, // Name of the icon (e.g., 'eye-open')
    },
    customClass: {
      type: String,
      default: '', // Custom CSS class for styling
    },
  });
  </script>
  
  <style scoped>
  .icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
  }
  </style>