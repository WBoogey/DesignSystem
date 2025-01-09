<template>
  <div class="input-wrapper">
     <label v-if="label" class="input-label">{{ label }}</label>
     <span v-if="errorMessage" class="input-error">{{ errorMessage }}</span>
     <input
       :type="type"
       :placeholder="placeholder"
       :disabled="disabled"
       class="input-field"
     />
  </div>
 </template>

 <script setup>
 const props = defineProps({
   type: String,
   placeholder: String,
   disabled: Boolean,
   label: String,
   errorMessage: String,
 });
 </script>

 <style scoped>
 .input-wrapper {
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
 }

 .input-label {
   font-size: var(--font-size-small);
   color: var(--color-text-primary);
 }

 .input-field {
   padding: 10px 12px;
   border: 1px solid var(--color-border);
   border-radius: 4px;
   font-size: var(--font-size-base);
   width: 100%;
   box-sizing: border-box;
   font-family: var(--font-family-body);
 }

 .input-field:focus {
   outline: none;
   border-color: var(--color-buttons);
 }

 .input-field::placeholder {
   color: var(--color-text-tertiary);
 }

 .input-field:disabled {
   background-color: #f5f5f5;
   cursor: not-allowed;
 }

 .input-error {
   color: var(--color-danger);
   font-size: var(--font-size-small);
 }
 </style>