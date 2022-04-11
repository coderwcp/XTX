// 模块A
const state = {
  username: 'module_A'
}
const mutations = {

}
const actions = {

}
const getters = {
  changeName (state) {
    return state.username + 'A'
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
