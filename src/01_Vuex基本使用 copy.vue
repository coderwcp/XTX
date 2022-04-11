<template>
  <div>
    <h1>App</h1>

    <h2>使用Vuex根模块的数据</h2>
    <!-- 使用Vuex模块中的数据 -->
    <p>{{$store.state.username}}</p>
    <!-- 使用Vuex模块中的getters的数据 -->
    <p>{{$store.getters['newName']}}</p>

    <h2>使用Vuex模块中的数据</h2>
    <p>A的username -- {{$store.state.moduleA.username}}</p>
    <p>A的changeName -- {{$store.getters.changeName}}</p>
    <hr>
    <p>B的username --- {{$store.state.moduleB.username}}</p>
    <p>B的changeName --- {{$store.getters['moduleB/changeName']}}</p>
    <button @click="$store.commit('moduleB/update','B')">修改username</button>
    <button @click="$store.dispatch('moduleB/update','B')">异步修改username</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    // 使用Vuex状态管理
    const store = useStore()
    // 1. 使用根模块中的数据
    console.log(store.state.username)
    // 2. 使用根模块getters的数据
    console.log(store.getters.newName)

    const updateName = () => {
      // 3. 提交mutations函数
      store.commit('updateName')
      // 4. 调用actions函数
      store.dispatch('updateName')
    }

    return {
      updateName
    }
  }
}
</script>

<style>

</style>
