<template>
  <div>
    <button class="bouton" :type="props.type" :style="{ backgroundColor: props.backgroundColor, color: props.color }" :disabled="props.disabled">
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  type: String,
  disabled: Boolean,
  backgroundColor: String,
  color: String,
})
</script>

<style scoped>

</style>