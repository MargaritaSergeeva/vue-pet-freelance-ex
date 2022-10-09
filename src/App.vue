<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <app-alert :alert="store.getters.getAlert" @close="store.commit('resetAlert')"></app-alert>
  </div>
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { onMounted } from 'vue'
import TheNavbar from '@/components/TheNavbar'
import AppAlert from '@/components/AppAlert'

const store = useStore()

onMounted(() => {
  store.dispatch('loadAllTasks')
})
</script>
