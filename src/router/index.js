import Day1NamedSlots from '@/views/Day-1-Named-Slots.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/day-1',
      name: 'Day-1',
      component: Day1NamedSlots,
    },
  ],
})

export default router
