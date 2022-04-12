<template>
  <app-topnav/>
  <app-header/>
  <main>
    <!-- 二级路由 -->
    <router-view />
  </main>
  <app-footer />
</template>

<script>
import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import { useStore } from 'vuex'

export default {
  name: 'xtx-layout',
  components: { AppTopnav, AppHeader, AppFooter },
  setup (props) {
    // 初始化的时候获取数据
    const store = useStore()
    store.dispatch('category/getList')

    return {

    }
  }
}
</script>

<style lang="less" scoped>

</style>
