<template>
 <div>
    <input :type="props.type" :content="props.content" :style="{ backgroundColor: props.backgroundColor, color: props.color }" :placeholder="placeholder" :disabled="props.disabled" />
 </div>
</template>

<script setup>
  const props=defineProps({
   type: String,
   placeholder: String,
   disabled: Boolean,
   backgroundColor: String,
   color: String,
 })

</script>

<style scoped>
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

input::placeholder {
  color: #999;
}

input:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}
</style>