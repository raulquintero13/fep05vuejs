import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BuyView from '../views/BuyView.vue'
import CheckoutView from '../views/CheckoutView.vue'

const routes = [
  {path: '/', name: 'home', component: HomeView},
  {path: '/:id', name: 'home1', component: HomeView},
  {path: '/buy', name: 'buy', component: BuyView},
  {path: '/checkout', name: 'checkout', component: CheckoutView,},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
