import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BuyView from '../views/BuyView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import TicketView from '../views/TicketView.vue'
import OrdersView from '../views/OrdersView.vue'
import InventoryView from '../views/InventoryView.vue'
import OrderView from '../views/OrderView.vue'

const routes = [
  {path: '/', name: 'home', component: HomeView},
  {path: '/:id', name: 'home1', component: HomeView},
  {path: '/buy', name: 'buy', component: BuyView},
  {path: '/checkout', name: 'checkout', component: CheckoutView,},
  {path: '/ticket/:id', name: 'ticket', component: TicketView,},
  {path: '/orders/', name: 'orders', component: OrdersView,},
  {path: '/inventory/', name: 'inventory', component: InventoryView,},
  {path: '/order', name: 'order', component: OrderView,},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
