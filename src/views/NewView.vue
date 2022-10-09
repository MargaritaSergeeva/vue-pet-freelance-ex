<template>
  <form class="card" @submit.prevent="sendForm">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input v-model="form.title" type="text" id="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input v-model="form.deadline" type="date" id="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea v-model="form.description" id="description"></textarea>
    </div>
    <app-button color="primary" type="submit" :is-disabled="isBtnDisabled">Создать</app-button>
  </form>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import AppButton from '@/components/AppButton'

const router = useRouter()
const store = useStore()
const form = ref({
  title: '',
  deadline: '',
  status: '',
  description: ''
})

const isBtnDisabled = computed(() => {
  return !form.value.title || !form.value.deadline || !form.value.description
})

const status = computed(() => {
  return new Date().getTime() > new Date(form.value.deadline).getTime() ? 'cancelled' : 'active'
})

const resetForm = () => {
  form.value.title = ''
  form.value.deadline = ''
  form.value.description = ''
  form.value.status = ''
}

const sendForm = () => {
  if (!isBtnDisabled.value) {
    form.value.status = status.value
    store.dispatch('createNewTask', { ...form.value })
    resetForm()
    router.push({ name: 'home' })
  }
}
</script>
