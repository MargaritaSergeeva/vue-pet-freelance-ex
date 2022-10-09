<template>
  <div class="card">
    <div class="form-control">
      <label for="filter">Фильтр по статусу:</label>
      <select v-model="status" @change="$emit('filter', status)">
        <option value="">Все статусы</option>
        <option
          v-for="(status, index) in STATUSES"
          :key="index"
          :value="status.type">
          {{ status.title }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from 'vue'
import { STATUSES } from '@/constant'

defineEmits(['filter'])

const status = ref('')
</script>
