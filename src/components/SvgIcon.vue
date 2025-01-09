<template>
  <svg :class="`icon ${customClass}`" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script setup>

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  customClass: {
    type: String,
    default: '',
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
