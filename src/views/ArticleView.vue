<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})
import { onMounted, ref, computed } from 'vue'

import axios from 'axios'

import { formatDateToFR, formatNumberToFR } from '@/assets/fonctions.js'
import { useCycleList } from '@vueuse/core'

const article = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `https://site--strapileboncoin--2m8zk47gvydr.code.run/api/offers/${props.id}?populate[0]=pictures&populate[1]=owner.avatar`,
    )
    article.value = data.data
  } catch (error) {
    console.log(error)
  }
})

const cycleList = computed(() => {
  if (article.value.attributes.pictures.data) {
    const { state, next, prev } = useCycleList(article.value.attributes.pictures.data)
    return { state, next, prev }
  } else {
    return {}
  }
})
</script>

<template>
  <main>
    <p v-if="article.length === 0">Chargement en cours...</p>
    <article v-else>
      <div class="introduction">
        <div class="articleSlider">
          <img v-bind:src="cycleList.state.value.attributes.url" alt="" />
          <button @click="cycleList.prev()" v-if="article.attributes.pictures.data?.length > 1">
            Previous
          </button>
          <button @click="cycleList.next()" v-if="article.attributes.pictures.data?.length > 1">
            Next
          </button>
        </div>
        <div class="userContact">
          <div class="user">
            <img src="https://placehold.co/30x30" />
            <p>username</p>
          </div>
          <div class="action"><button>Acheter</button> <button>Message</button></div>
        </div>
      </div>
      <div class="articleInformation">
        <h3>{{ article.attributes.title }}</h3>
        <p class="articlePrix">{{ formatNumberToFR(article.attributes.price) }} €</p>
        <p class="articleDate">{{ formatDateToFR(article.attributes.updatedAt) }}</p>
      </div>
      <div class="articleDescription">
        <h3>Description</h3>
        <p>{{ article.description }}</p>
      </div>
    </article>
  </main>
</template>

<style scoped>
article {
  max-width: 800px;
  margin: 0 auto;
  background-color: antiquewhite;
  padding: 16px;
  border-radius: 16px;
}
.introduction,
.user {
  display: flex;
  flex-direction: row;
}
.articleSlider,
.userContact,
.articleInformation,
.articleDescription {
  padding: 16px;
}
</style>
