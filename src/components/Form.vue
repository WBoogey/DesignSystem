<template>
  <div>
    <Input type="text"  placeholder="Entrez votre texte ici" :disabled="false" />
    <Button variant="secondary" :disabled="true" >Button</Button>
  </div>
</template>

<script setup>
import Input from './Input.vue'
import Button from '../components/Button.vue'

</script>

<style scoped>
</style>