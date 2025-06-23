<script setup></script>
<template>
  <div>
    <h1>Inscription</h1>
    <p>Inscrivez-vous pour découvrir toutes nos fonctionnalités</p>
    <form action="">
      <label for="name">Nom</label>
      <input type="text" name="name" id="name" />
      <label for="email">Email</label>
      <input type="email" name="email" id="email" />
      <label for="password">Mot de passe</label>
      <input type="password" name="password" id="password" />
      <button>S'incrire</button>
      <p>Vous avez déjà un compte ? <RouterLink to="/login">Connectez-vous</RouterLink></p>
    </form>
  </div>
</template>
<style scoped>
div {
  margin: 0 auto;
  width: 600px;
  border-radius: 25px;
  border: 1px solid gray;
  padding: 50px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
