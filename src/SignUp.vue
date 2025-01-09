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
        Mot de passe oublié ? <a href="#">Réinitialisez-le ici</a>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: "SignUp",
  };
  </script>
  
  <style scoped>
  /* Variables globales pour les couleurs */
  :root {
    /* Couleurs pour mode clair */
    --color-Background: #b7d7c6;
    --color-backgroud-section: #d5e9df;
    --color-border: #ccc;
    --color-buttons-focus: #6dbb7f;
    --color-disabled: #0c0c0d;
    --color-button-borderFocusP: #154a1a;
    --color-buttons-Primary: #6dbb7f;
    --color-buttons-Secondary: #f1f3eb;
    --color-button-borderFocuS: #93b896;
    --color-text-primary: #333;
    --color-text-secondary: #555;
    --color-text-tertiary: #777;
    --color-danger: #ff0000;
    --color-danger-borderFocus: #850505;
  
    /* Taille de police */
    --font-size-xs: 12px;
    --font-size-sm: 14px;
    --font-size-base: 16px;
    --font-size-lg: 20px;
    --font-size-xl: 24px;
    --font-size-2xl: 30px;
  
    /* Famille de police */
    --font-family-primary: 'Roboto', sans-serif;
    --font-family-body: 'Open Sans', sans-serif;
  }
  
  /* Mode sombre */
  @media (prefers-color-scheme: dark) {
    :root {
      --color-Background: #2c2c2c;
      --color-backgroud-section: #444;
      --color-border: #777;
      --color-buttons-focus: #58d89b;
      --color-disabled: #ccc6c6;
      --color-button-borderFocusP: #154a1a;
      --color-buttons-Primary: #4f9d69;
      --color-buttons-Secondary: #333;
      --color-button-borderFocuS: #93b896;
      --color-text-primary: #fff;
      --color-text-secondary: #ccc;
      --color-text-tertiary: #aaa;
      --color-danger: #ff0000;
      --color-danger-borderFocus: #850505;
    }
  }
  
  /* Fond général */
  body {
    background-color: var(--color-Background);
    margin: 0;
    font-family: var(--font-family-body);
    color: var(--color-text-primary);
  }
  
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
  
  /* Titre */
  .signup-container h1 {
    margin-bottom: 20px;
    color: var(--color-text-primary);
  }
  
  /* Champ du formulaire */
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
  
  /* Bouton */
  .login-button {
    background-color: var(--color-buttons-Primary);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: var(--font-size-base);
    cursor: pointer;
    margin-top: 20px;
  }
  
  .login-button:hover {
    background-color: var(--color-buttons-focus);
  }
  
  /* Lien pour mot de passe oublié */
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
  
