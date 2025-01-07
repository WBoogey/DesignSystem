<template>
    <div>
      <input
        type="text"
        :disabled="false"
        :style="{
          backgroundColor: 'var(--color-background-section)',
          color: 'var(--color-text-tertiary)'
        }"
      />
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    type: String,
    placeholder: String,
    disabled: Boolean,
  });
  </script>
  
  <style scoped>
  /* Ensure these variables are defined somewhere in your global CSS or scoped CSS */
  :root {
    --color-background-section: #f5f5f5;
    --color-text-tertiary: #333;
  }
  
  input {
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
  }
  
  input:focus {
    outline: none;
    border-color: #007bff;
  }
  
  input:disabled {
    background-color: var(--color-disabled-bg);
    color: var(--color-disabled-text);
    cursor: not-allowed;
  }
  </style>
  