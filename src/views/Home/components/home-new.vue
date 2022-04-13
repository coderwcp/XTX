<template>
    <home-panel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
      <template #right>
        <xtx-more path='/'/>
      </template>
      <!-- 面板内容 -->
      <div ref="container" style="position: relative;height: 406px;">
        <transition name="fade">
          <ul v-if="goods.length" class="goods-list">
            <li v-for="item in goods" :key="item.id">
              <router-link :to="`/product/${item.id}`">
                <img :src="item.picture" alt="">
                <p class="name ellipsis">{{item.name}}</p>
                <p class="price">&yen;{{item.price}}</p>
              </router-link>
            </li>
          </ul>
          <home-skeleton v-else bg="#f0f9f4" />
        </transition>
      </div>
    </home-panel>
</template>

<script>
import XtxMore from '@/components/library/xtx-more'
import homePanel from './home-panel'
import { getNew } from '@/api/home'
import HomeSkeleton from './home-skeleton'
import { useLazyData } from '@/hook'

export default {
  name: 'HomeNew',
  components: { homePanel, XtxMore, HomeSkeleton },
  setup () {
    // 商品数据
    const { container, data } = useLazyData(getNew)

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
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: @priceColor;
    }
  }
}
</style>
