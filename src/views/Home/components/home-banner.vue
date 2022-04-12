<template>
  <div class="home-banner">
    <XtxCarousel :sliders="sliders" auto-play />
  </div>
</template>

<script>
import { getBanner } from '@/api/home'
import { ref } from '@vue/reactivity'

export default {
  name: 'HomeBanner',
  setup () {
    const sliders = ref([])

    getBanner().then(data => {
      sliders.value = data.result
    })

    return {
      sliders
    }
  }
}
</script>

<style lang="less" scoped>
.home-banner{
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
}
</style>
