<template>
  <app-loader v-if="store.getters.getIsLoading"></app-loader>
  <div v-else>
    <h1 v-if="!store.getters.getTasksCount" class="text-white center">Задач пока нет</h1>
    <div v-else>
      <h3 class="text-white">Всего активных задач: {{store.getters.getActiveTasksCount}}</h3>
      <tasks-filter @filter="status = $event"></tasks-filter>
      <h4 class="text-white">Всего указанных задач: {{tasks(status).length}}</h4>
      <div v-if="tasks(status).length">
        <tasks-task
          v-for="task in tasks(status)"
          :key="task.id"
          :task="task">
        </tasks-task>
      </div>
      <div v-else class="card">
        <h3>Нет задач с указанным статусом</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import AppLoader from '@/components/AppLoader'
import TasksFilter from '@/components/tasks/TasksFilter'
import TasksTask from '@/components/tasks/TasksTask'

const store = useStore()
const status = ref('')
const tasks = computed(() => (st) => {
  return st ? store.getters.getFilteredTasks(st) : store.getters.getTasks
})
</script>
