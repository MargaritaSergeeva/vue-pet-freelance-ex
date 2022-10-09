<template>
  <div class="card">
    <h2 class="card-title">
      {{ task.title }}
      <AppStatus :type="task.status" />
    </h2>
    <p>
      <strong>
        <small>
          {{ new Date(task.deadline).toLocaleDateString() }}
        </small>
      </strong>
    </p>
    <app-button
      color="primary"
      @action="router.push({name: 'task', params: {taskId: task.id}})">
      Посмотреть
    </app-button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'
import AppStatus from '../AppStatus'
import AppButton from '../AppButton'

const router = useRouter()

defineProps({
  task: {
    type: Object,
    required: true,
    validator (value) {
      const hasKeys = Object.keys(value).reduce((has = true, key) => {
        if (!['title', 'status', 'deadline', 'id', 'description'].includes(key)) has = false
        return has
      }, [])
      return hasKeys && Object.keys(value).length === 5
    }
  }
})
</script>
