<template>
  <XtxBread>
    <XtxBreadItem to="/">首页</XtxBreadItem>
    <XtxBreadItem :key="category.top.id" v-if="category.top" :to="`/category/${category.top.id}`">{{category.top.name}}</XtxBreadItem>
    <Transition name="fade-right" mode="out-in">
      <XtxBreadItem v-if="category.sub" :key="category.sub.id">{{category.sub.name}}</XtxBreadItem>
    </Transition>
  </XtxBread>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
  name: 'SubBread',
  setup () {
    // 1.获取二级分类的id，从当前路由地址中获取
    const route = useRoute()
    // console.log(route.params.id)
    // 2.获取Vuex中的类目数据
    const store = useStore()
    // console.log(store)
    // 3.通过计算属性得到二级类目的名称和id，一级类目的名称和id
    const category = computed(() => {
      const obj = {}
      store.state.category.list.forEach(top => {
        top.children && top.children.forEach(sub => {
          if (sub.id === route.params.id) {
            // 保存二级类目
            obj.sub = { id: sub.id, name: sub.name }
            // 保存一级类目
            obj.top = { id: top.id, name: top.name }
          }
        })
      })
      return obj
    })

    // 返回获取的一级类目和二级类目
    return {
      category
    }
  }
}
</script>

<style>

</style>
