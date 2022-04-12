import { createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/views/Logout')
const Home = () => import('@/views/Home')
const TopCategory = () => import('@/views/Category')
const SubCategory = () => import('@/views/Category/sub-category')

const staticRoutes = [
  {
    path: '/',
    component: Layout,
    name: 'Layout',
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/category/:id',
        component: TopCategory
      },
      {
        path: '/category/sub/:id',
        component: SubCategory
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
