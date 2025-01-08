<template>
  <div>
    <button :class="['button',`button-${variant}`]" :type="props.type"  :disabled="props.disabled">
      <slot></slot>
    </button>
  </div>
</template>

<script setup>

const props = defineProps({
  variant: 'primary' | 'secondary'| 'tertiary',
  disabled: Boolean,
})

</script>
<style scoped>

.button {
  padding: 10px 20px;
  border: none;
  border-radius: 80px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button-primary {
  background-color: var(--color-buttons-activeP);
}

.button-primary:hover {
  background-color: var(--color-buttons-hoverP);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1);
}

.button-primary:focus {
  border: 2px solid var(--color-button-borderP);
}

.button-secondary {
  background-color: var(--color-buttons-activeS);
}

.button-secondary:hover {
  background-color: var(--color-buttons-hoverS);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1);
}

.button-secondary:focus {
  border: 2px solid var(--color-button-borderS);
}

.button-tertiary{
  background-color: var(--color-danger-active);
}

.button-tertiary:hover {
  background-color: var(--color-danger-hover);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1);
}

.button-tertiary:focus {
  border: 2px solid var(--color-danger-border);
}

.button:disabled {
  cursor: not-allowed;
  background-color: var(--color-disabled);
  color:#686566;
}

</style>