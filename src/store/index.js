// Vuex状态管理
import { createStore } from 'vuex'

// 模块导入
// import moduleA from './module/a'
// import moduleB from './module/b'
import user from './module/user'
import cart from './module/cart'
import category from './module/category'

// 使用vuex-persistedstate插件来进行持久化
import createPersistedstate from 'vuex-persistedstate'

// 创建Vuex状态管理并导出
export default createStore({
  modules: {
    // 模块化
    // moduleA,
    // moduleB
    user,
    cart,
    category
  },
  // ===> 默认是存储在localStorage中
  // ===> key是存储数据的键名
  // ===> paths是存储state中的那些数据，如果是模块下具体的数据需要加上模块名称，如user.token
  // ===> 修改state后触发才可以看到本地存储数据的的变化。
  plugins: [
    createPersistedstate({
      key: 'erabbit-client-pc-store',
      paths: ['user', 'cart']
    })
  ]
})
