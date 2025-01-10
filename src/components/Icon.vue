<template>
  <div class="svg-icon-wrapper">
    <svg :class="['icon', customClass]" :width="size" :height="size" :fill="color">
    <use :xlink:href="`/src/assets/sprites/sprite.svg#${name}`"></use>
  </svg>
  </div>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: [Number, String],
    default: 24
  },
  color: {
    type: String,
    default: 'var(--color-text-primary)'
  },
});
</script>

<style scoped>
.svg-icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.icon {
  display: inline-block;
  vertical-align: middle;
  transition: all 0.3s ease;
}

.icon:hover {
  transform: scale(1.1);
}
</style>

