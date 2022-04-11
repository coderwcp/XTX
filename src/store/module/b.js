// 模块B
const state = {
  username: 'module_B'
}
const mutations = {
  update (state, value) {
    state.username += value
  }
}
const actions = {
  update (context, payload) {
    context.commit('update', payload)
  }
}
const getters = {
  changeName (state) {
    return state.username + 'B'
  }
}

export default {
  // 带命名空间的模块
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
