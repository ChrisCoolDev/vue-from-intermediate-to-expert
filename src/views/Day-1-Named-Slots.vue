<script setup>
import CardComponent from '@/components/components-day1/CardComponent.vue'
import { ref } from 'vue'
const currentSlot = ref('card-header')
</script>

<template>
  <CardComponent>
    <template v-slot:[currentSlot]>
      <h1 class="text-md font-semibold text-center mt-4">Confirm your Order</h1>
    </template>
    <template v-slot:card-body>
      <p class="text-sm text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, vero eos. Cum magnam
        error, laboriosam asperiores suscipit sapiente possimus ducimus voluptatum eos, officia
        inventore rem reprehenderit. Labore quasi minima fuga.
      </p>
    </template>
    <template v-slot:card-footer>
      <button
        class="w-full flex items-center justify-center py-2 rounded-[6px] bg-green-500 text-white"
      >
        confirm
      </button>
      <button
        class="w-full flex items-center justify-center py-2 rounded-[6px] bg-red-500 text-white"
      >
        Cancel
      </button>
    </template>
  </CardComponent>
</template>
