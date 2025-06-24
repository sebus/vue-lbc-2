<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { ref, inject } from 'vue'
import axios from 'axios'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const isSubmit = ref(false)

const GlobalStore = inject('GlobalStore')
const router = useRouter()

const handleSubmit = async () => {
  console.log({
    email: email.value,
    password: password.value,
  })

  if (email.value && password.value) {
    isSubmit.value = true
    try {
      const { data } = await axios.post(
        'https://site--strapileboncoin--2m8zk47gvydr.code.run/api/auth/local',
        {
          identifier: email.value,
          password: password.value,
        },
      )
      console.log(data)
      GlobalStore.changeToken(data.jwt)
      router.push({ name: 'home' })
    } catch (error) {
      console.log(error)
      errorMessage.value = 'Un problème est survenu, veuillez essayez à nouveau'
    }
    isSubmit.value = false
  } else {
    errorMessage.value = 'Veuillez remplir tous les champs'
  }
}
</script>
<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h1>Connexion</h1>
      <p>Connectez-vous pour découvrir toutes nos fonctionnalités</p>
      <label for="email">Email <sup>*</sup></label>
      <input type="email" name="email" id="email" v-model="email" />
      <label for="password">Mot de passe <sup>*</sup></label>
      <input type="password" name="password" id="password" v-model="password" />
      <p v-if="isSubmit">Chargement en cours...</p>
      <button v-else>Se connecter</button>
      <p v-if="errorMessage">{{ errorMessage }}</p>
      <p>
        Envie de nous rejoindre ? <RouterLink :to="{ name: 'signup' }">Créer un compte</RouterLink>
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
