<template>
  <form class="form" @submit.prevent="handleSubmit">
    <template v-for="(field, index) in fields" :key="index">
      <Input v-bind="field" />
    </template>
    <Button v-bind="button">
      {{ button.text }}
    </Button>
  </form>
</template>

<script setup>
import Input from './Input.vue';
import Button from './Button.vue';

const props = defineProps({
  fields: {
    type: Array,
    required: true,
  },
  button: {
    type: Object,
    required: true,
  }
});
</script>

<style scoped>

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

</style>