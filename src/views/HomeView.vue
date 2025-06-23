<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

import OfferCard from '@/components/OfferCard.vue'

const listAnnonces = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers?populate[0]=pictures&populate[1]=owner.avatar',
    )
    listAnnonces.value = data.data
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <main>
    <h2>Les annonces</h2>

    <p v-if="listAnnonces.length === 0">Chargement en cours ...</p>
    <section v-else>
      <OfferCard v-for="annonce in listAnnonces" :key="annonce.id" :annonceInfos="annonce" />
    </section>
  </main>
</template>

<style scoped>
section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 12px;
  max-width: 1280px;
  margin: 0 auto;
}
</style>
