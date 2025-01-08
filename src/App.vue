<template>
  <div>
    <Input type="text"  placeholder="Entrez votre texte ici" :disabled="false" />
    <Button type="button" color="white" backgroundColor="var(--color-buttons)" :disabled="true" >Cliquez ici</Button>
  </div>
</template>

<script setup>
import Button from './components/Button.vue';

import Input from './components/Input.vue'
</script>

<style scoped>

</style>