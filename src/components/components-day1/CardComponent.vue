<script setup>
defineProps({
  item: Object,
})
</script>

<template>
  <div
    class="px-4 rounded-xl max-w-[400px] w-full bg-white space-y-6 border border-solid border-grey-400 shadow-xl"
  >
    <slot name="card-header"></slot>
    <slot name="card-body"></slot>
    <!-- Default slot
    <slot>Value in case of fallback</slot>
    -->
    <div class="space-y-3 pb-6">
      <slot name="card-footer"></slot>
    </div>
  </div>
</template>
