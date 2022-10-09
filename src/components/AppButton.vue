<template>
  <button
    :class="[view === 'standard' ? 'btn' : 'close-btn', color]"
    :type="type"
    :disabled="isDisabled"
    @click="$emit('action')">
    <slot/>
    <svg v-if="view === 'cross'" width="14" height="14" viewBox="0 0 12 12" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
            d="M11.1854 11.1855C10.708 11.663 9.93446 11.663 9.45697 11.1855L6 7.72853L2.54303 11.1855C2.06554 11.663 1.29204 11.663 0.81455 11.1855C0.337057 10.708 0.337058 9.93451 0.814551 9.45701L4.27152 6.00005L0.814551 2.54308C0.337058 2.06559 0.337057 1.29209 0.814551 0.8146C1.29204 0.337106 2.06554 0.337106 2.54303 0.8146L6 4.27157L9.45697 0.8146C9.93403 0.337538 10.708 0.337106 11.1854 0.814599C11.6629 1.29209 11.6625 2.06602 11.1854 2.54308L7.72848 6.00005L11.1854 9.45701C11.6629 9.93451 11.6629 10.708 11.1854 11.1855Z"
            fill="#596982"/>
    </svg>
  </button>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

defineEmits(['action'])

defineProps({
  color: {
    type: String,
    default: '',
    validator (value) {
      return ['', 'danger', 'primary'].includes(value)
    }
  },
  type: {
    type: String,
    default: 'button',
    validator (value) {
      return ['button', 'reset', 'submit'].includes(value)
    }
  },
  view: {
    type: String,
    default: 'standard',
    validator (value) {
      return ['standard', 'cross'].includes(value)
    }
  },
  isDisabled: {
    type: Boolean,
    default: false,
    validator (value) {
      return value === true || value === false
    }
  }
})
</script>
