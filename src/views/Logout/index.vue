<template>
  <app-topnav/>
  <nav>顶部通栏</nav>
  <header>头部</header>
  <main>
    <!-- 二级路由 -->
    <router-view />
  </main>
  <footer></footer>
</template>

<script>
import appTopnav from '@/components/app-topnav'
export default {
  name: 'xtx-layout',
  components: { appTopnav }
}
</script>

<style lang="less" scoped>

</style>
