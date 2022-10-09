<template>
  <span :class="['badge', STATUSES.find(i => i.type === type).class]">
    {{ STATUSES.find(i => i.type === type).title }}
  </span>
</template>

<script setup>
import { defineProps } from 'vue'
import { STATUSES } from '@/constant'

defineProps({
  type: {
    type: String,
    required: true,
    validator (value) {
      return ['active', 'done', 'cancelled', 'pending'].includes(value)
    }
  }
})
</script>
