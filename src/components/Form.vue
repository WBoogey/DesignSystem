<template>
  <section class="form-section">
    <form class="form">
      <h1 class="form-title">Update Your Password</h1>
      <div class="form-group">
        <div class="form-icon-container">
          <i class="fas fa-envelope form-icon"></i>
        </div>
        <input
          type="email"
          class="form-input"
          placeholder="Entrez votre adresse mail..."
        />
      </div>
      <div class="form-group">
        <div class="form-icon-container">
          <i class="fas fa-lock form-icon"></i>
        </div>
        <input
          type="password"
          class="form-input"
          placeholder="Entrez votre nouveau mot de passe..."
        />
      </div>
      <button class="form-button" type="submit">Update</button>
      <p class="form-footer">
        Vous vous souvenez de votre mot de passe ? <a href="#">Connectez-vous ici</a>
      </p>
    </form>
  </section>
</template>

<script>
export default {
  name: "UpdatePasswordForm",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --color-Background: #BEE6CE;
  --color-backgroud-section: #BCFFDB;
  --color-border: #8DFFCD;
  --color-buttons-focus: #68D89B;
  --color-buttons-Primary: #4F9D69;
  --font-size-base: 16px;
  --font-family-primary: 'Roboto', sans-serif;
  --font-family-body: 'Open Sans', sans-serif;
  --color-text-primary: #333333;
  --color-text-tertiary: #777777;
}

body {
  font-family: var(--font-family-body);
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  background-color: var(--color-Background);
}

.form-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-Background);
}

.form {
  background-color: var(--color-backgroud-section);
  border: 1px solid var(--color-border);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.form-title {
  font-size: 24px;
  font-family: var(--font-family-primary);
  color: var(--color-text-primary);
  margin-bottom: 2rem;
}

.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.form-icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  background-color: white;
  margin-right: 10px;
}

.form-icon {
  font-size: 18px;
  color: var(--color-text-tertiary);
}

.form-input {
  flex: 1;
  padding: 0.75rem 1rem;
  font-size: var(--font-size-base);
  border: 1px solid var(--color-border);
  border-radius: 5px;
  background-color: white;
  color: var(--color-text-primary);
  font-family: var(--font-family-body);
}

.form-input:focus {
  border-color: #154A1A;
  outline: none;
}

.form-button {
  background-color: var(--color-buttons-Primary);
  color: white;
  font-family: var(--font-family-primary);
  font-size: var(--font-size-base);
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-button:hover {
  background-color: var(--color-buttons-focus);
}

.form-footer {
  margin-top: 1rem;
  font-size: 14px;
  color: var(--color-text-tertiary);
}

.form-footer a {
  color: var(--color-buttons-Primary);
  text-decoration: none;
  font-weight: bold;
}

.form-footer a:hover {
  text-decoration: underline;
}
</style>
