<template>
  <!-- 筛选区 -->
  <div class="sub-filter" v-if="filterData && !filterLoading">
    <div class="item">
      <div class="head">品牌：</div>
      <div class="body">
        <a
          :class="{ active: filterData.selectedBrand === brand.id }"
          href="javascript:;"
          v-for="brand in filterData.brands"
          :key="brand.id"
          @click="changeBrand(brand.id)"
        >
          {{ brand.name }}
        </a>
      </div>
    </div>
    <div class="item" v-for="p in filterData.saleProperties" :key="p.id">
      <div class="head">{{ p.name }}:</div>
      <div class="body">
        <a
          href="javascript:;"
          :class="{ active: p.selectedProp === attr.id }"
          v-for="attr in p.properties"
          :key="attr.id"
          @click="changeAttr(p,attr.id)"
          >{{ attr.name }}</a
        >
      </div>
    </div>
  </div>
  <div class="sub-filter" v-else>
    <XtxSkeleton class="item" width="800px" height="40px" />
    <XtxSkeleton class="item" width="800px" height="40px" />
    <XtxSkeleton class="item" width="600px" height="40px" />
    <XtxSkeleton class="item" width="600px" height="40px" />
    <XtxSkeleton class="item" width="600px" height="40px" />
  </div>
</template>

<script>
import { getSubCategoryFilter } from '@/api/category'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

export default {
  name: 'SubFilter',
  setup (props, { emit }) {
    // 1.获取数据
    // 2.数据中需要全部选中，需要预览将来点击激活功能，默认选中全部
    // 3.完成渲染
    const route = useRoute()
    const filterData = ref(null)
    const filterLoading = ref(false)
    // 4.分类发生变化的时候需要重新渲染筛选数据，需要使用侦听器
    watch(() => route.params.id, (newValue, oldValue) => {
      // 当从二级分类去到顶级分类也会拿到id，不能去加载数据，因为不是二级分类的id
      if (newValue && route.path === ('/category/sub/' + newValue)) {
        filterLoading.value = true
        newValue && getSubCategoryFilter(route.params.id).then(({ result }) => {
          // 匹配全部
          result.selectedBrand = null
          result.brands.unshift({ id: null, name: '全部' })
          // 销售属性全部
          result.saleProperties.forEach(p => {
            p.selectedProp = undefined
            p.properties.unshift({ id: null, name: '全部' })
          })
          console.log(result)
          filterData.value = result
          filterLoading.value = false
        })
      }
    }, { immediate: true })

    // 获取筛选参数
    const getFilterParams = () => {
      const filterParams = {}
      const attrs = []
      filterParams.brandId = filterData.value.selectedBrand
      filterData.value.saleProperties.forEach(p => {
        const attr = p.properties.find(attr => attr.id === p.selectedProp)
        if (attr && attr.id !== undefined) {
          attrs.push({ groupName: p.name, propertyName: attr.name })
        }
      })
      if (attrs.length) filterParams.attrs = attrs
      return filterParams
    }

    // 选择品牌
    const changeBrand = (brandId) => {
      if (filterData.value.selectedBrand === brandId) return
      filterData.value.selectedBrand = brandId
      emit('filter-change', getFilterParams())
    }

    // 选中属性
    const changeAttr = (p, attrId) => {
      if (p.selectedProp === attrId) return
      p.selectedProp = attrId
      emit('filter-change', getFilterParams())
    }

    return {
      filterData,
      filterLoading,
      changeBrand,
      changeAttr
    }
  }
}
</script>

<style scoped lang='less'>
// 筛选区
.sub-filter {
  background: #fff;
  padding: 25px;
  .item {
    display: flex;
    line-height: 40px;
    .head {
      width: 80px;
      color: #999;
    }
    .body {
      flex: 1;
      a {
        margin-right: 36px;
        transition: all 0.3s;
        display: inline-block;
        &.active,
        &:hover {
          color: @xtxColor;
        }
      }
    }
  }
}
.xtx-skeleton {
  padding: 10px 0;
}
</style>
