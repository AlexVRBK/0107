import vHome from "@/views/vHome.vue";
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  routes: [
    {
      path: '/',
      component: vHome
    },
   
    
  ],
  history: createWebHistory()
})

export default router