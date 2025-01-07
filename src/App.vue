<template>
  <div>
    <Input type="text"  placeholder="Entrez votre texte ici" :disabled="false" />
    <bouton type="button" color="white" backgroundColor="var(--color-buttons)" :disabled="true" >Cliquez ici</bouton>
  </div>
</template>

<script setup>
import Bouton from './components/Bouton.vue'
import Input from './components/Input.vue'
</script>

<style scoped>

</style>