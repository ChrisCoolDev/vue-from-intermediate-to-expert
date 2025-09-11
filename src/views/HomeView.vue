<script setup>
import topics from '@/data/topics'
</script>

<template>
  <div class="px-4">
    <div class="max-w-lg w-full mx-auto mt-6 space-y-8">
      <h1 class="text-xl font-semibold">Here are all the topics i've learned :</h1>
      <ul class="list-disc space-y-2 ml-4">
        <li v-for="topic in topics" :key="topic.id">
          <a :href="`/day-${topic.id}`" class="text-sm underline font-medium text-gray-600">{{
            topic.name
          }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
