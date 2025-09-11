<script setup>
import { inject } from 'vue'

const theme = inject('isThemeToggled')

if (!theme) {
  throw new Error('Theme not provided')
}

defineProps({
  notifiers: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div
    :class="[
      theme === true ? 'border-blue-400' : 'border-gray-400',
      'py-3 px-2 flex items-start space-x-3 w-full border border-solid',
    ]"
    v-for="notifier in notifiers"
    :key="notifier.id"
  >
    <div>
      <img :src="notifier.imagePath" alt="" class="w-9 h-9 rounded-full" />
    </div>
    <div class="space-y-1">
      <p class="text-xs">{{ notifier.name }}</p>
      <p class="text-sm">{{ notifier.message }}</p>
    </div>
  </div>
</template>
