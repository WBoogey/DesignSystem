<template>
  <div class="update-password-container">
    <h1 class="title">Update Password</h1>
    <div class="form-container">
      <form>
        <div class="form-group">
          <label for="currentPassword">Mot de passe actuel :</label>
          <input
            type="password"
            id="currentPassword"
            placeholder="Entrez votre mot de passe actuel"
          />
        </div>
        <div class="form-group">
          <label for="newPassword">Nouveau mot de passe :</label>
          <input
            type="password"
            id="newPassword"
            placeholder="Entrez votre nouveau mot de passe"
          />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirmer le nouveau mot de passe :</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirmez votre nouveau mot de passe"
          />
        </div>
        <button type="submit" class="update-button">
          Mettre à jour le mot de passe
        </button>
      </form>
    </div>
  </div>
</template>

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

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  font-size: var(--font-size-base);
  box-sizing: border-box;
}

.update-button {
  background-color: var(--color-buttons-Primary);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: var(--font-size-base);
  cursor: pointer;
}

.update-button:hover {
  background-color: var(--color-buttons-focus);
}
</style>
