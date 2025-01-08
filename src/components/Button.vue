<template>
  <div>
    <button :class="['bouton',`button-${variant}`]" :type="props.type" :style="{ backgroundColor: props.backgroundColor, color: props.color }" :disabled="props.disabled">
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  type: String,
  variant: 'primary' | 'secondary',
  disabled: Boolean,
  color: String,
})
</script>
<style scoped>
  
.button-primary{
  background-color: red;
}
.button-secondary{
  background-color: blue;
}

</style>