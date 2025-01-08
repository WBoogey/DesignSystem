<template>
  <div>
    <Input type="text"  placeholder="Entrez votre texte ici" :disabled="false" />
    <Button  class="button  button-primary"  :disabled="false" >Cliquez ici</Button>
  </div>
</template>

<script setup>
import Button from './components/Button.vue';

import Input from './components/Input.vue'
</script>

<style scoped>

</style>