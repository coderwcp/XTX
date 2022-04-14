import { createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/views/Logout')
const Home = () => import('@/views/Home')
const TopCategory = () => import('@/views/Category')
const SubCategory = () => import('@/views/Category/sub-category')
const Goods = () => import('@/views/Goods')

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
      },
      {
        path: '/product/:id',
        component: Goods
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
  routes,
  // 每次切换路由的时候滚动到顶部
  scrollBehavior () {
    return { left: 0, top: 0 }
  }
})

export default router
