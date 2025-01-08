<template>
  <div class="form">
    <Input label="Lable name" type="text"  placeholder="Entrez votre texte ici" :disabled="false" />
    <Input label="Label name" type="text"  placeholder="Entrez votre texte ici" :disabled="false" />
    <Button variant="primary" :disabled="false" >Button</Button>
  </div>
</template>

<script setup>
import Input from './Input.vue'
import Button from '../components/Button.vue'

</script>

<style scoped>

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

</style>