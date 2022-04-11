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
export default {
  name: 'xtx-layout',
  components: { AppTopnav, AppHeader, AppFooter }
}
</script>

<style lang="less" scoped>

</style>
