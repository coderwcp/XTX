// 用户模块

const state = {
  // 用户信息
  profile: {
    id: '',
    avatar: '',
    nickname: '',
    account: '',
    mobile: '',
    token: ''
  }
}
const mutations = {
  // 修改用户信息方法
  setUser (state, payload) {
    state.profile = payload
  }
}
const actions = {

}
const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
