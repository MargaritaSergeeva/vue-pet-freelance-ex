import { createRouter, createWebHistory } from 'vue-router'
import TasksView from '@/views/TasksView'
import NewView from '@/views/NewView'
import TaskView from '@/views/TaskView'
import NotFoundView from '@/views/NotFoundView'

const routes = [
  {
    path: '/tasks',
    component: TasksView,
    alias: '/',
    name: 'home'
  },
  {
    path: '/new',
    name: 'newTask',
    component: NewView
  },
  {
    path: '/task/:taskId?',
    name: 'task',
    component: TaskView
  },
  {
    path: '/:hotFound(.*)',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
