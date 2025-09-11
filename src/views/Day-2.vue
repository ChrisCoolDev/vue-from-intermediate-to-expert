<script setup>
import NotificationItem from '@/components/components-day2/NotificationItem.vue'
import { provide, ref } from 'vue'

const notifiers = [
  {
    id: 1,
    name: 'Christian',
    imagePath: 'https://randomuser.me/api/portraits/men/80.jpg',
    message: "Bonjour, n'oublies pas notre rendez-vous de demain pleaase!",
  },
  {
    id: 2,
    name: 'Ludovic',
    imagePath: 'https://randomuser.me/api/portraits/men/17.jpg',
    message: 'Ta PR a cassée la prod, contacte rapidement ton lead!!',
  },
  {
    id: 3,
    name: 'Christy',
    imagePath: 'https://randomuser.me/api/portraits/women/56.jpg',
    message: 'Hii Chris, chambre no8 A SwissHotel demain 20h30',
  },
]

const theme = ref('light')
const isThemeToggled = ref(false)

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  isThemeToggled.value = !isThemeToggled.value
}

provide('isThemeToggled', isThemeToggled)
</script>

<template>
  <div :class="[theme === 'light' ? 'bg-white' : 'bg-black text-white', 'px-4 h-screen']">
    <div class="max-w-md w-full mx-auto space-y-3">
      <div class="py-4 flex items-center justify-between text-sm">
        <p>Username</p>
        <button @click="toggleTheme">{{ theme }} mode</button>
      </div>
      <div>
        <ul class="space-y-4">
          <NotificationItem :notifiers="notifiers" />
        </ul>
      </div>
    </div>
  </div>
</template>
