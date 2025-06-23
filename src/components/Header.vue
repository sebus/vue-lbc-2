<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>
<template>
  <header>
    <h1><RouterLink :to="{ name: 'home' }">Leboncoin</RouterLink></h1>
    <p><RouterLink :to="{ name: 'login' }">Se connecter</RouterLink></p>
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
