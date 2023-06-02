import { createRouter, createWebHistory } from 'vue-router'
import GetUser from '../components/GetUser.vue'
import GetUsers from '../components/GetUsers.vue'
import GetPosts from '../components/GetPosts.vue'

const routes = [
  {
    path: '/users',
    name: 'GetUsers',
    component: GetUsers
  },
  {
    path: '/users/:id',
    name: 'GetUser',
    component: GetUser
  },
  {
    path: '/posts',
    name: 'GetPosts',
    component: GetPosts
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router