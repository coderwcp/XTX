<template>
  <home-panel title="人气推荐" sub-title="人气爆款 不容错过">
    <div ref="container" style="position: relative;height: 426px;">
      <transition name="fade">
        <ul v-if="goods.length" class="goods-list" ref="panel">
          <li v-for="item in goods" :key="item.id">
            <router-link to="">
              <img :src="item.picture" alt="">
              <p class="title">{{item.title}}</p>
              <p class="desc">{{item.alt}}</p>
            </router-link>
          </li>
        </ul>
        <home-skeleton v-else />
      </transition>
    </div>
  </home-panel>
</template>

<script>
import homePanel from './home-panel'
import { getHot } from '@/api/home'
import HomeSkeleton from './home-skeleton'
import { useLazyData } from '@/hook'

export default {
  name: 'HomeHot',
  components: { homePanel, HomeSkeleton },
  setup () {
    const { data, container } = useLazyData(getHot)
    return {
      goods: data,
      container
    }
  }
}
</script>

<style lang="less" scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
