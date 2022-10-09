<template>
  <div v-if="store.getters.getTaskById(taskId)" class="card">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date(task.deadline).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <app-button @action="changeStatus('pending')">Взять в работу</app-button>
      <app-button color="primary" @action="changeStatus('done')">Завершить</app-button>
      <app-button color="danger" @action="changeStatus('cancelled')">Отменить</app-button>
    </div>
  </div>
  <h3 v-else class="text-white center">
    Задачи с id = <strong>{{ route.params.taskId }}</strong> нет.
  </h3>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import AppStatus from '@/components/AppStatus'
import AppButton from '@/components/AppButton'

const store = useStore()
const route = useRoute()
const taskId = ref(route.params.taskId)

const task = computed(() => {
  return store.getters.getTaskById(taskId.value) || { status: 'active' }
})

const changeStatus = (status) => {
  store.dispatch('editTask', { ...task.value, status })
}

</script>
