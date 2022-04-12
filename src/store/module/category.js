// 分类信息模块
import { topCategory } from '@/api/constants'
import { getAllCategory } from '@/api/category'

const state = {
  // 分类信息列表
  // 如果默认是[]数组，看不见默认的9个分类，等你数据加载完毕才会看到。
  // 所以：根据常量数据来生成一个默认的顶级分类数据，不会出现空白（没数据的情况）
  list: topCategory.map(item => ({ name: item }))
}
const mutations = {
  // 加载数据成功后需要修改list所以需要mutations函数
  setList (state, newList) {
    state.list = newList
  },
  // 修改当前一级分类下的open数据为true
  show (state, item) {
    const category = state.list.find(category => category.id === item.id)
    category.open = true
  },
  // 修改当前一级分类下的open数据为false
  hide (state, item) {
    const category = state.list.find(category => category.id === item.id)
    category.open = false
  }
}
const actions = {
  // 需要向后台加载数据，所以需要actions函数获取数据
  // getList (context) {
  async getList ({ commit }) {
    const { result } = await getAllCategory()
    console.log(result)
    // 给一级分类加上一个控制二级分类显示隐藏的数据open
    result.forEach((item) => {
      item.open = false
    })
    // 获取数据成功，提交mutations进行数据修改
    commit('setList', result)
  }
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
