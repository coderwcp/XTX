<template>
  <app-topnav/>
  <app-header/>
  <main>
    <!-- 二级路由 -->
    <router-view />
  </main>
  <footer></footer>
</template>

<script>
import appTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
export default {
  name: 'xtx-layout',
  components: { appTopnav, AppHeader }
}
</script>

<style lang="less" scoped>

</style>
