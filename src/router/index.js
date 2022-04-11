import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/views/Logout'
import Home from '@/views/Home'

const staticRoutes = [
  {
    path: '/',
    component: Layout,
    name: 'Layout',
    children: [
      {
        path: '/',
        component: Home
      }
    ]
  }
]

const routes = [
  ...staticRoutes
]

// 创建路由
const router = createRouter({
  // 使用hash方式实现路由
  history: createWebHashHistory(),
  // 配饰路由规则
  routes
})

export default router
