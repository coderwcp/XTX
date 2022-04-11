import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 重置样式使用normalize.css，项目公用样式common.less
import '@/assets/styles/normalize.css'
import '@/assets/styles/common.less'
import '@/assets/styles/font.css'

// 测试Vuex本地存储持久化
// store.commit('user/setUser', { id: 'abc' })

// 创建Vue应用实例，使用Vuex、Vue-Router并挂载到 #app 容器
createApp(App).use(store).use(router).mount('#app')
