import Day1NamedSlots from '@/views/Day-1-Named-Slots.vue'
import Day2 from '@/views/Day-2.vue'
import Day3 from '@/views/Day-3.vue'
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
    {
      path: '/day-2',
      name: 'Day-2',
      component: Day2,
    },
    {
      path: '/day-3',
      name: 'Day-3',
      component: Day3,
    },
  ],
})

export default router
