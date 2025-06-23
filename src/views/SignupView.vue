<script setup>
import { ref, inject } from 'vue'
import { RouterLink } from 'vue-router'
import axios from 'axios'

const username = ref('')
const email = ref('')
const password = ref('')

const GlobalStore = inject('GlobalStore')
console.log('GlobalStore >>> ', GlobalStore)

const handleSubmit = async () => {
  console.log({
    username: username.value,
    email: email.value,
    password: password.value,
  })

  try {
    const { data } = await axios.post(
      'https://site--strapileboncoin--2m8zk47gvydr.code.run/api/auth/local/register',
      { username: username.value, email: email.value, password: password.value },
    )
    console.log('response >>> ', data)
    GlobalStore.changeToken(data.jwt)
  } catch (error) {
    console.log('catch >>> ', error)
  }
}
</script>
<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h1>Inscription</h1>
      <p>Inscrivez-vous pour découvrir toutes nos fonctionnalités</p>
      <label for="username">Nom <sup>*</sup></label>
      <input type="text" name="username" id="username" v-model="username" />
      <label for="email">Email <sup>*</sup></label>
      <input type="email" name="email" id="email" v-model="email" />
      <label for="password">Mot de passe <sup>*</sup></label>
      <input type="password" name="password" id="password" v-model="password" />
      <button>S'incrire</button>
      <p>
        Vous avez déjà un compte ? <RouterLink :to="{ name: 'login' }">Connectez-vous</RouterLink>
      </p>
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
