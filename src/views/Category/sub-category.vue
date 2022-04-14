<template>
  <div class="sub-category">
    <div class="container">
      <!-- 面包屑 -->
      <sub-bread/>
      <!-- 筛选区 -->
      <sub-filter @filter-change="changeFilter" />
      <!-- 结果区 -->
      <div class="goods-list">
        <!-- 排序 -->
        <sub-sort @sort-change="changeSort" />
        <!-- 列表 -->
        <ul>
          <li v-for="goods in goodsList" :key="goods.id">
            <goods-item :goods="goods"/>
          </li>
        </ul>
        <!-- 加载 -->
        <xtx-infinite-loading :loading="loading" :finished="finished" @infinite="getData"/>
      </div>
    </div>
  </div>
</template>

<script>
import SubBread from './components/sub-bread'
import SubFilter from './components/sub-filter.vue'
import SubSort from './components/sub-sort'
import GoodsItem from './components/goods-item'
import XtxInfiniteLoading from '@/components/library/xtx-infinite-loading'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import { getSubCategoryGoods } from '@/api/category'
export default {
  name: 'SubCategory',
  components: { SubBread, SubFilter, SubSort, GoodsItem, XtxInfiniteLoading },
  setup () {
    // 1. 基础布局
    // 2. 无限加载组件
    // 3. 动态加载数据且渲染
    // 4. 任何筛选条件变化需要更新列表
    const route = useRoute()

    const loading = ref(false)
    const finished = ref(false)
    const goodsList = ref([])

    // 查询参数
    let reqParams = {
      page: 1,
      pageSize: 20
    }

    // 获取数据
    const getData = () => {
      loading.value = true
      reqParams.categoryId = route.params.id
      getSubCategoryGoods(reqParams).then(({ result }) => {
        console.log(result)
        if (result.items.length) {
          goodsList.value.push(...result.items)
          reqParams.page++
        } else {
          // 请求的数据中没有items则表示请求完毕
          finished.value = true
        }
        // 请求结束
        loading.value = false
      })
    }

    // 监听筛选区改变
    const changeFilter = (filterParams) => {
      reqParams = { ...reqParams, ...filterParams }
      reqParams.page = 1
      goodsList.value = []
      finished.value = false
    }
    // 监听排序改变
    const changeSort = (sortParams) => {
      reqParams = { ...reqParams, ...sortParams }
      reqParams.page = 1
      goodsList.value = []
      finished.value = false
    }
    watch(() => route.params.id, (newValue) => {
      if (newValue && route.path === ('/category/sub' + newValue)) {
        goodsList.value = []
        reqParams = {
          page: 1,
          pageSize: 20
        }
        finished.value = false
      }
    })

    return { loading, finished, goodsList, getData, changeFilter, changeSort }
  }
}
</script>

<style scoped lang="less">
.goods-list{
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
    li {
      margin-right: 20px;
      margin-bottom: 20px;
      &:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
}
</style>
