<template>
  <div>
    <button :class="['button',`button-${variant}`]" :type="props.type"  :disabled="props.disabled">
      {{ label }}
    </button>
  </div>
</template>

<script setup>

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  variant: 'primary' | 'secondary'| 'tertiary',
  disabled: {
    type: Boolean,
    default: false,
  },
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
  background-color: var(--color-buttons-Primary);
}

.button-primary:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1);
}

.button-primary:focus {
  border: 2px solid var(--color-button-borderFocusP);
}

.button-secondary {
  background-color: var(--color-buttons-Secondary);
}

.button-secondary:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1);
}

.button-secondary:focus {
  border: 2px solid var(--color-button-borderFocuS);
}

.button-tertiary{
  background-color: var( --color-danger);
}

.button-tertiary:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1);
}

.button-tertiary:focus {
  border: 2px solid var(--color-danger-borderFocus);
}

.button:disabled {
  cursor: not-allowed;
  background-color: var(--color-disabled);
  color:#686566;
}

</style>