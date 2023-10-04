import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SystemView from '../views/SystemView.vue'
import NotFound from '../views/NotFoundView.vue'
import UserView from '../views/UserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/system',
      name: 'systemview',
      component: SystemView
    },
    {
      path: '/user/:codigo',
      name: 'userview',
      component: UserView
    },
    {
      path:'/:pathMatch(.*)*',
      name:"NotFound",
      component: NotFound
    },
  ]
})

export default router
