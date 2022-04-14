// 定义首页需要的接口函数
import request from '@/utils/request'

/**
 * 获取首页头部分类数据
 */
export function getAllCategory () {
  return request('/home/category/head', 'get')
}

// 根据id获取当前分类中的数据
export function getTopCategory (id) {
  return request('/category', 'get', { id })
}

// 获取二级分类筛选条件数据
export function getSubCategoryFilter (id) {
  return request('/category/sub/filter', 'get', { id })
}

// 获取分类下的商品（带筛选条件）
export function getSubCategoryGoods (params) {
  return request('/category/goods/temporary', 'post', params)
}
