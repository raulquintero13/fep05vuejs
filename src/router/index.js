import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BuyView from '../views/BuyView.vue'

const routes = [
  {
    path: '/:id',
    name: 'home/',
    component: HomeView
  },
  {
    path: '/buy',
    name: 'buy',
    component: BuyView,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
