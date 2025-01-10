<template>
  <div class="signup-container">
    <h1>Sign Up</h1>
    <form>
      <div class="form-group">
        <label for="field1">EMAIL :</label>
        <input type="text" id="field1" placeholder="Placeholder...." />
      </div>
      <div class="form-group">
        <label for="field2">PassWord :</label>
        <input type="password" id="field2" placeholder="Placeholder...." />
      </div>
      <button type="submit" class="login-button">LOGIN</button>
    </form>
    <p class="forgot-password">
      Mot de passe oublié ? <a href="UpdatePassword">Réinitialisez-le ici</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "SignUp",
};
</script>

<style scoped>
/* Container principal */
.signup-container {
  background-color: var(--color-backgroud-section);
  width: 400px;
  margin: 100px auto;
  padding: 20px 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.signup-container h1 {
  margin-bottom: 20px;
  color: var(--color-text-primary);
}


.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  font-size: var(--font-size-base);
  box-sizing: border-box;
}

.login-button {
  background-color: var(--color-buttons-Primary);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 80px;
  font-size: var(--font-size-base);
  cursor: pointer;
  margin-top: 20px;
}

.login-button:hover {
  background-color: var(--color-buttons-focus);
}

.forgot-password {
  margin-top: 20px;
  font-size: var(--font-size-sm);
}

.forgot-password a {
  color: var(--color-text-primary);
  text-decoration: none;
  font-weight: bold;
}

.forgot-password a:hover {
  text-decoration: underline;
}
</style>
