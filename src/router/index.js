import { createRouter, createWebHistory } from 'vue-router'
import TasksView from '@/views/TasksView'
import NewView from '@/views/NewView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: TasksView
  },
  {
    path: '/new',
    name: 'about',
    component: NewView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
