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
  /* Fond général */
  body {
    background-color: #b7d7c6;
    margin: 0;
    font-family: Arial, sans-serif;
  }
  
  /* Container principal */
  .signup-container {
    background-color: #d5e9df;
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
    color: #000;
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
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    box-sizing: border-box;
  }
  
  /* Bouton */
  .login-button {
    background-color: #6dbb7f;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
  }
  
  .login-button:hover {
    background-color: #58a569;
  }
  
  /* Lien pour mot de passe oublié */
  .forgot-password {
    margin-top: 20px;
    font-size: 14px;
  }
  
  .forgot-password a {
    color: #000;
    text-decoration: none;
    font-weight: bold;
  }
  
  .forgot-password a:hover {
    text-decoration: underline;
  }
  </style>
  