import { createRouter, createWebHistory } from '@ionic/vue-router'
import HomeView from '../views/HomeView.vue'
import SystemView from '../views/SystemView.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/system',
      name: 'systemview',
      component: SystemView,
      meta: { RequireAuth: true}
    },
    {
      path: '/login',
      name: 'loginview',
      component: LoginView
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: ShoppingCart
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach( (to,from,next) => {
  const usuarioLog = localStorage.getItem('usuario')
  if( to.matched.some(r => r.meta.RequireAuth) && !usuarioLog ) {
    next('/')
  }
  next()
})
  
export default router
