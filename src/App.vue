<template>
  <div>
    <Form
  :fields="[
    { label: 'Nom', type: 'text', placeholder: 'Entrez votre nom' },
    { label: 'Email', type: 'email', placeholder: 'Entrez votre email' },
    { label: 'Mot de passe', type: 'password', placeholder: 'Entrez votre mot de passe' }
  ]"
  :button="{ text: 'Envoyer', variant: 'primary' }"
/>

  </div>
</template>

<script setup>
import Form from './components/Form.vue';
</script>

<style scoped>

</style>