<script setup>
import { formatDateToFR, formatNumberToFR } from '@/assets/fonctions.js'
const props = defineProps({
  annonceInfos: Object,
})
</script>

<template>
  <RouterLink
    :to="{
      name: 'article',
      params: { id: annonceInfos.id },
    }"
  >
    <div class="card">
      <header>
        <img src="https://placehold.co/30x30" class="avatar" alt="" />
        <div>{{ annonceInfos.attributes.owner.data.attributes.username }}</div>
        <p>id: {{ annonceInfos.id }}</p>
      </header>
      <div class="desc">
        <img
          class="product"
          alt=""
          :src="annonceInfos.attributes.pictures.data[0].attributes.url"
        />
        <p>{{ annonceInfos.attributes.title }}</p>
        <p>{{ formatNumberToFR(annonceInfos.attributes.price) }} €</p>
      </div>
      <footer>
        <div>{{ formatDateToFR(annonceInfos.attributes.updatedAt) }}</div>
        <div>Coeur</div>
      </footer>
    </div></RouterLink
  >
</template>
<style scoped>
.card {
  background-color: antiquewhite;
  padding: 16px;
  border-radius: 16px;
}
.card header,
.card footer {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
}
.card header,
.card footer,
.card div.desc {
  padding: 8px;
}
.card div.desc p {
  font-weight: bold;
}
.avatar {
  border-radius: 50%;
}
.product {
  border-radius: 8px;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1/1;
}
</style>
