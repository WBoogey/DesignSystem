<template>
    <div class="update-password">
      <form>
        <h1>Update Your Password</h1>
        <div class="input-container">
          <label for="email">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
              <path d="M4 4h16v16H4z"></path>
              <path d="M22 6l-10 7L2 6"></path>
            </svg>
          </label>
          <input id="email" type="email" placeholder="Entrez votre adresse mail..." />
        </div>
        <div class="input-container">
          <label for="password">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0110 0v4"></path>
            </svg>
          </label>
          <input id="password" type="password" placeholder="Entrez votre nouveau mot de passe..." />
        </div>
        <button type="submit">Update</button>
        <p>
          Vous vous souvenez de votre mot de passe ? <a href="/login">Connectez-vous ici</a>
        </p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "UpdatePassword",
  };
  </script>
  
  <style scoped>
  .update-password {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #d8f3dc;
    font-family: Arial, sans-serif;
  }
  
  form {
    background-color: #ffffff;
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 350px;
    text-align: center;
  }
  
  form h1 {
    font-size: 1.5em;
    color: #333333;
    margin-bottom: 20px;
  }
  
  .input-container {
    display: flex;
    align-items: center;
    margin: 10px 0;
    border: 1px solid #cbd5e1;
    border-radius: 5px;
    padding: 5px 10px;
  }
  
  .input-container svg {
    width: 20px;
    height: 20px;
    color: #6b7280;
    margin-right: 10px;
  }
  
  .input-container input {
    width: 100%;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 1em;
  }
  
  .input-container input::placeholder {
    color: #9ca3af;
  }
  
  form button {
    width: 100%;
    padding: 10px;
    background-color: #38a169;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    font-size: 1em;
    cursor: pointer;
    margin-top: 10px;
  }
  
  form button:hover {
    background-color: #2f855a;
  }
  
  form p {
    margin-top: 10px;
    font-size: 0.9em;
    color: #333333;
  }
  
  form a {
    color: #38a169;
    text-decoration: none;
  }
  
  form a:hover {
    text-decoration: underline;
  }
  </style>
  