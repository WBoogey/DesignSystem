<template>
  <div class="">
    
    <div class="form-container">
      <Form
        :fields="[
          {
            name: 'currentPassword',
            label: 'Mot de passe actuel',
            type: 'password',
            placeholder: 'Entrez votre mot de passe actuel',
            icon: {
              name: 'eye-slash',
              position: 'right',
              color: 'var(--color-text-secondary)'
            }
          },
          {
            name: 'newPassword',
            label: 'Nouveau mot de passe',
            type: 'password',
            placeholder: 'Entrez votre nouveau mot de passe',
            icon: {
              name: 'eye-slash',
              position: 'right',
              color: 'var(--color-text-secondary)'
            }
          },
          {
            name: 'confirmPassword',
            label: 'Confirmer le nouveau mot de passe',
            type: 'password',
            placeholder: 'Confirmez votre nouveau mot de passe',
            icon: {
              name: 'eye-slash',
              position: 'right',
              color: 'var(--color-text-secondary)'
            }
          }
        ]"
        :button="{
          text: 'Mettre à jour le mot de passe',
          variant: 'primary'
        }"
      />
    </div>
  </div>
</template>

<script setup>
import Form from '../components/Form.vue';
</script>

<style scoped>
.update-password-container {
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: var(--color-backgroud-section);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.title {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-xl);
  color: var(--color-text-primary);
  text-align: center;
  margin-bottom: 2rem;
}

.form-container {
  width: 100%;
}

@media (max-width: 600px) {
  .update-password-container {
    margin: 1rem;
    padding: 1rem;
  }

  .title {
    font-size: var(--font-size-lg);
  }
}
</style>