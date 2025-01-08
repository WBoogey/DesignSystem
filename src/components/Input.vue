<template>
 <div class="input-wrapper">
    <label v-if="props.label">{{ props.label }}</label>
    <input :type="props.type" :content="props.content" :style="{ backgroundColor: props.backgroundColor, color: props.color }" :placeholder="placeholder" :disabled="props.disabled" />
 </div>
</template>

<script setup>


  const props=defineProps({
   type: String,
   placeholder: String,
   disabled: Boolean,
   label: String,
   backgroundColor: String,
   color: String,
 })
</script>

<style scoped>

.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

input {
  padding: 10px 12px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: var(--font-size-base);
  width: 100%;
  box-sizing: border-box;
  font-family: var(--font-family-body);
}

input:focus {
  outline: none;
  border-color: var(--color-buttons);
}

input::placeholder {
  color: var(--color-text-tertiary);
}

input:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}
</style>