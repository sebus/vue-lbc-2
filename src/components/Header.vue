<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { inject } from 'vue'

const GlobalStore = inject('GlobalStore')
console.log(GlobalStore.userToken)
</script>
<template>
  <header>
    <h1><RouterLink :to="{ name: 'home' }">Leboncoin</RouterLink></h1>
    <p v-if="!GlobalStore.userToken.value">
      <RouterLink :to="{ name: 'login' }">Se connecter</RouterLink>
    </p>
    <p v-else><a @click="GlobalStore.changeToken('')">Deconnect user</a></p>
  </header>
</template>
<style scoped>
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>
